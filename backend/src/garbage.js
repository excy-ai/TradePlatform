// const user = await User.create({
//     email: "deda@mail.ru",
//     password: "password",
//     firstName: "deda",
//     lastName: "doeda",
//
// });
//
// const inventory = await Inventory.create({
// });
// const item1 = await Item.create({
//     sign:"item1",
//     description:"item1descr",
//     category:"items"
// });
// const item2 = await Item.create({
//     sign:"item2",
//     description:"item2descr",
//     category:"items"
// });
// await user.setInventory(inventory);
// await inventory.addItem(item1);
// await inventory.addItem(item2);
//
// console.log(await(await (await user.getInventory()).getItems())[0].description);