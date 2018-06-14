export { default as toArray } from './toArray';
export { default as map } from './map';
export { default as filter } from './filter';
export { default as take } from './take';
export { default as scan } from './scan';
export { default as count } from './count';
export { default as last } from './last';
export { default as nth } from './nth';
export { default as chain } from './chain';
export { default as enumerate } from './enumerate';
export { default as zip } from './zip';

/*
 * stepBy n (gives you every n items)
 * forEach (like tap or inspect?)
 * filterMap (truthy? or straight up null?)
 * skip / drop n
 * skipWhile / dropWhile / dropUntil fn
 * takeWhile fn
 * flatMap
 * flatten
 * partition fn (can this be done?)
 * reduce
 * all fn -> bool
 * any fn -> bool
 * find fn -> item
 * position fn -> number
 * max
 * min
 * maxByKey fn(x)
 * maxBy fn(x, y)
 * minByKey fn(x)
 * minBy fn(x, y)
 * unzip (takes [[1,2], [3,4]] returns two Ps)
 * cycle it (starts over again when done)
 * sum
 * product
 */
