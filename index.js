"use strict";
/**
 * Enum
 */
// enum Job {
//     Frontend,
//     Backend = 50,
//     Designer
// }
//
// const job: Job = Job.Backend;
// console.log(job);
//
// const job2: Job = Job.Designer;
// console.log(job2);
//
// const job3: Job = Job.Frontend;
// console.log(job3);
//
// function throughNewError(err: string): never {
//     throw new Error(err)
// }
/**
 * Decorators
 */
// function logger(constrFn: Function) {
//     console.log('constrFn ', constrFn);
// }
//
// function shouldLog(flag: boolean): any {
//     return flag ? logger : null;
// }
//
// @shouldLog(true)
// class User {
//     constructor(public name: string,
//                 public age: number) {
//         console.log('I am new user');
//     }
// }
// ===========================================================
// function addShowAbility(constrFn: Function) {
//     constrFn.prototype.showHtml = function () {
//         const pre = document.createElement('pre');
//
//         pre.innerHTML = JSON.stringify(this);
//         document.body.appendChild(pre);
//     }
// }
//
// @addShowAbility
// class User {
//     constructor(public name: string,
//                 public age: number,
//                 public job: string) {
//     }
// }
//
// const ivan = new User('Ivan', 25, 'Frontend');
// console.log(ivan);
// (<any>ivan).showHtml();
/**
 * Namespaces
 */
// namespace Util {
//     export function isEmpty(data: any): boolean {
//         return !data;
//     }
//
//     export function isUndefined(data: any): boolean {
//         return typeof data === 'undefined';
//     }
//
//     export const PI = Math.PI;
//     export const EXP = Math.E;
// }
//
// console.log(Util.isEmpty(''));
// console.log(Util.isEmpty('test'));
// console.log(Util.isUndefined(undefined));
// console.log(Util.isUndefined(null));
// console.log(Util.PI);
// console.log(Util.EXP);
//
// const EXP = 'TEST';
// console.log(EXP);
/**
 * Interface
 */
// ;(function () {
//     interface ItemConstructor {
//         new (id: string): IItem;
//     }
//
//     interface IItem {
//         id: string;
//     }
//
//     class Item implements IItem {
//         constructor(public id: string) {
//         }
//     }
//
//     interface ItemIdToItemMap {
//         [id: string]: IItem;
//     }
//
//     class ItemsCache {
//         private itemsCache: {[key: string]: IItem};
//
//         constructor(private itemConstractor: ItemConstructor) {
//             this.itemsCache = {};
//         }
//
//         public createItem(id: string): IItem {
//             if (!!this.itemsCache[id]) return this.itemsCache[id];
//
//             const item: IItem = new this.itemConstractor(id);
//
//             this.itemsCache[id] = item;
//
//             return item;
//         }
//     }
//
//     const cache = new ItemsCache(Item);
//     const item1 = cache.createItem('a');
//     const item2 = cache.createItem('b');
//     const item3 = cache.createItem('a');
//
//     console.log('item1 ', item1);
//     console.log('item2 ', item2);
//     console.log('item3 ', item3);
//     console.log('item1 and item2: ', item1 === item2);
//     console.log('item1 and item3: ', item1 === item3);
//
//     const item4: Item = {
//         id: 'new id'
//     };
//     console.log('item4 ', item4);
//
//     const item5: Item = {
//         id: 'new id2'
//     };
//     console.log('item5 ', item5);
//
//     console.log('#############################################');
//     console.log('#############################################');
//
//     class Control {
//         private state: any;
//
//         doStuff(control: SelectableControl): void {
//             control.state = 'some state';
//         }
//     }
//
//     interface SelectableControl extends Control {
//         select(): void;
//     }
//
//     class CheckBox extends Control {
//         select(): void {
//         }
//     }
//
//     class Button {
//         select(): void {
//         }
//     }
//
//     let selectableControl: SelectableControl;
//     selectableControl = new CheckBox();
//
//     // These will yield errors:
//     // selectableControl = new Button();
//     // selectableControl.doStuff(new Button());
//
// })();
/**
 * Generics
 */
// ;(function () {
//
//     function genericGetter<T>(data: T): T {
//         return data;
//     }
//
//     console.log(genericGetter(100).length);
//     console.log(genericGetter('Hello world!').length);
//     console.log(genericGetter<string>('Hello world!').length);
//     console.log(genericGetter<number>(100).toFixed(2));
//
//     const newGenericGetter: <T>(data: T) => T = genericGetter;
//
//     console.log(newGenericGetter<string>('Hello world!').length);
//     console.log(newGenericGetter<number>(100).toFixed(2));
//
//     // ========================================================================
//
//     class Multiply<T extends number | string> {
//         constructor(private a: T,
//                     private b: T) {
//         }
//
//         getResult(): number {
//             return +this.a * +this.b;
//         }
//     }
//
//     const mNum = new Multiply(10, 5);
//     console.log('Number ', mNum.getResult());
//
//     const mStr = new Multiply('3', '15');
//     console.log('String ', mStr.getResult());
// })();
// ;(function () {
//     interface Sportsman {
//         age: number;
//         name: string;
//     }
//
//     interface Runner extends Sportsman {
//         canRun: boolean;
//     }
//
//     function getOlderUser<T extends Runner>(user1: T, user2: T): T {
//         return (user1.age >=  user2.age) ? user1 : user2;
//     }
//
//     const ivan = {age: 23, name: 'Ivan', canRun: false, canSwim: true};
//     const vasya = {age: 28, name: 'Vasya', canRun: true, canSwim: false};
//     const user = getOlderUser(vasya, ivan);
//
//     console.log('User ', user);
// })();
