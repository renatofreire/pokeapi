export interface ActionReturn<T> {
  type: string;
  payload?: T;
}

function creatAction<T>(type: string): (payload?: T) => ActionReturn<T> {
  return function actionCreator(payload?: T): ActionReturn<T> {
    return {
      type,
      payload,
    };
  };
}

export default creatAction;
