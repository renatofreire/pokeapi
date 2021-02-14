import createAction from "../action-creator";

test("create an action without payload", () => {
  const actionCreator = createAction("action-type");
  expect(actionCreator()).toEqual({
    type: "action-type",
  });
});

test("create an action with payload", () => {
  const actionCreator = createAction("action-type");
  expect(actionCreator("action-payload")).toEqual({
    type: "action-type",
    payload: "action-payload",
  });
});

test("create an action with payload with falsy patload", () => {
  const actionCreator = createAction("action-type");
  expect(actionCreator(0)).toEqual({
    type: "action-type",
    payload: 0,
  });

  expect(actionCreator(false)).toEqual({
    type: "action-type",
    payload: false,
  });

  expect(actionCreator(null)).toEqual({
    type: "action-type",
    payload: null,
  });
});
