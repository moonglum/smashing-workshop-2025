type Subscriber = () => void;

const subscribers = new WeakMap<object, Set<Subscriber>>();
const values = new WeakMap<object, any>();
let currentEffect: Subscriber | null = null;

export function createSignal<SomeType>(
  initialValue: SomeType
): [() => SomeType, (newValue: SomeType) => void] {
  const signal = {};

  subscribers.set(signal, new Set());
  values.set(signal, initialValue);

  const get = () => {
    if (currentEffect) {
      const subs = subscribers.get(signal);
      if (subs) {
        subs.add(currentEffect);
      }
    }
    return values.get(signal);
  };

  const set = (newValue: SomeType) => {
    const currentValue = values.get(signal);
    if (currentValue === newValue) return;

    values.set(signal, newValue);

    const subs = subscribers.get(signal);
    if (subs) {
      subs.forEach((subscriber) => subscriber());
    }
  };

  return [get, set];
}

export function createEffect(fn: () => void): void {
  const execute = () => {
    currentEffect = execute;
    fn();
    currentEffect = null;
  };

  execute();
}
