import test from "node:test";
import assert from "node:assert/strict";
import { buyUpgrade, createGame, forecast, getDebrief, runDay } from "../js/game.js";
import { nextNews } from "../js/events.js";

function seededRandom(seed = 1) {
  let value = seed >>> 0;
  return () => ((value = (1664525 * value + 1013904223) >>> 0) / 4294967296);
}

test("starts with the documented resources and a playable forecast", () => {
  const state = createGame(seededRandom());
  assert.equal(state.cash, 500);
  assert.equal(state.users, 5);
  assert.equal(state.ram, 8);
  assert.equal(state.gpu, 20);
  assert.ok(forecast(state).estimatedRequests > 0);
});

test("deals every news card before reshuffling and avoids immediate repeats", () => {
  const random = seededRandom(7);
  const state = createGame(random);
  const ids = [state.news.id];
  for (let index = 1; index < 14; index += 1) ids.push(nextNews(state, random).id);
  assert.equal(new Set(ids).size, 14);
  const previous = ids.at(-1);
  assert.notEqual(nextNews(state, random).id, previous);
});

test("captures the player's forecast before resolving the uncertain shift", () => {
  const random = seededRandom(21);
  const state = createGame(random);
  state.selectedAction = "improve";
  const expected = forecast(state);
  const report = runDay(state, random);
  assert.equal(report.forecastRequests, expected.estimatedRequests);
  assert.equal(report.forecastCapacity, expected.capacity);
  assert.equal(report.forecastSignups, expected.estimatedNew);
  assert.equal(state.phase, "report");
});

test("infrastructure purchases change persistent capacity", () => {
  const state = createGame(seededRandom(4));
  const before = forecast(state).capacity;
  assert.equal(buyUpgrade(state, "gpu"), true);
  assert.equal(state.gpu, 32);
  assert.ok(forecast(state).capacity > before);
});

test("founder debrief returns measurable outcomes and three lessons", () => {
  const random = seededRandom(12);
  const state = createGame(random);
  state.selectedAction = "support";
  runDay(state, random);
  const debrief = getDebrief(state);
  assert.ok(debrief.serviceRate >= 0 && debrief.serviceRate <= 1);
  assert.equal(debrief.insights.length, 3);
  assert.ok(Number.isFinite(debrief.operatingMargin));
});
