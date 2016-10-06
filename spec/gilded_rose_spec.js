describe("Gilded Rose", () => {
  it("Testing Item Properties: name, sell-in value, and quality", () => {
    var item = new Item('Kierans mace of Slaying', 5 , 10)
    expect(item.name).toEqual('Kierans mace of Slaying')
    expect(item.sell_in).toEqual(5)
    expect(item.quality).toEqual(10)
  })

  it('The Quality of any item is never negative', ()=>{
    items = []
    console.log('In third spec')
    items.push(new Item('Nearly Broken Item',5,0))
    expect(items[0].sell_in).toEqual(5)
    expect(items[0].quality).toEqual(0)

    update_quality()

    expect(items[0].sell_in).toEqual(4)
    expect(items[0].quality).toEqual(0)
  })
  it("Normal items quality and sell_in reduce by 1 every day", () =>{
    items = []
    console.log('in second spec')
    items.push(new Item('Wizards Staff', 10, 40))
    expect(items[0].name).toEqual('Wizards Staff')
    expect(items[0].sell_in).toEqual(10)
    expect(items[0].quality).toEqual(40)

    update_quality()
    expect(items[0].name).toEqual('Wizards Staff')
    expect(items[0].sell_in).toEqual(9)
    expect(items[0].quality).toEqual(39)
    //console.log(items)
  })
  it('The quality of a normal item is never greater than 50',() => {
    items = []
    console.log('In fifth spec')
    items.push(new Item('Aged Brie', 2, 50))
    expect(items[0].name).toEqual('Aged Brie')
    expect(items[0].sell_in).toEqual(2)
    expect(items[0].quality).toEqual(50)

    update_quality()

    expect(items[0].name).toEqual('Aged Brie')
    expect(items[0].sell_in).toEqual(1)
    expect(items[0].quality).toEqual(50)
  })
  it('Quality of a normal item degrades twice as fast once sell_in reaches 0', () => {
    items = []
    console.log('In sixth spec')
    items.push(new Item('yak milk', 0, 50))
    expect(items[0].name).not.toEqual('Sulfuras, Hand of Ragnaros')
    expect(items[0].name).not.toEqual('Aged Brie')
    expect(items[0].name).not.toEqual('Backstage passes to a TAFKAL80ETC concert')
    expect(items[0].name).not.toEqual('Conjured Mana Cake')
    expect(items[0].quality).toEqual(50)

    update_quality()
    expect(items[0].quality).toEqual(48)
  })

 it('Aged Brie" actually increases in quality the older it gets', () =>{
    items = []
    console.log('In fourth spec')
    items.push(new Item('Aged Brie', 2, 0))
    expect(items[0].name).toEqual('Aged Brie')
    expect(items[0].sell_in).toEqual(2)
    expect(items[0].quality).toEqual(0)

    update_quality()

    expect(items[0].name).toEqual('Aged Brie')
    expect(items[0].quality).toEqual(1)
  })





  it("Legendary: Sulfuras does not decrease in quality", () =>{
    items = []
    console.log('In Seventh spec')
    items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80))
    expect(items[0].quality).toEqual(80)

    update_quality()
    expect(items[0].quality).toEqual(80)
  })
  it("Legendary: Sulfuras, Hand of Ragnaros does not decrease sell in value", () => {
    items = []
    console.log('In Eighth Spec')
    items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80))
    expect(items[0].sell_in).toEqual(0)

    update_quality()
    expect(items[0].sell_in).toEqual(0)
  })
  it("BackStage Passes have 0 value when sell_in < 0", () => {
    items = []
    console.log('In Ninth Spec')
    items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20))
    expect(items[0].sell_in).toEqual(0)
    expect(items[0].quality).toEqual(20)

    update_quality()

    expect(items[0].sell_in).toEqual(-1)
    expect(items[0].quality).toEqual(0)
  })
  it ("backstage passes increase in value by 2 when sell_in < 10,and sell_in > 5", ()=>{
    items = []
    console.log('In Tenth Spec')
    items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 7, 20))
    expect(items[0].quality).toEqual(20)

    update_quality()

    expect(items[0].sell_in).toEqual(6)
    expect(items[0].quality).toEqual(22)

    update_quality()

    expect(items[0].sell_in).toEqual(5)
    expect(items[0].quality).toEqual(24)

    update_quality()
    expect(items[0].sell_in).toEqual(4)
    expect(items[0].quality).toEqual(27)
  })
  it ("backstage passes increase in value by 1 when sell_in >10", ()=>{
    items = []
    console.log('In eleventh Spec')
    items.push(new Item('Backstage passes to a TAFKAL80ETC concert',15, 20))
    expect(items[0].quality).toEqual(20)

    update_quality()
    expect(items[0].quality).toEqual(21)
  })
// describe("With Conjured items", () =>{
//   it("Conjured item cannot have quality greater than 50", () =>{
//     items = []
//     console.log('In twelveth Spec')
//     items.push(new Item('Conjured Hat',15, 50))
//     expect(items[0].quality).toEqual(50)
//   })
//   it("Conjured items degrade twice as fast as normal items", ()=>{
//     items = []
//     console.log('In thirteenth spec')
//     items.push(new Item('Conjured Flag', 10, 20))
//     expect(items[0].sell_in).toEqual(10)
//     expect(items[0].quality).toEqual(20)
//
//     update_quality()
//
//     expect(items[0].sell_in).toEqual(9)
//     expect(items[0].quality).toEqual(19)
//   })
// })


})
