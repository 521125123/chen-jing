function Parent1(){
    this.name = 'parent1';
  }
  Parent1.prototype.getName = function () {
    return this.name;
  }
  function Child1(){
    Parent1.call(this);
    this.type = 'child1'
  }
  let child = new Child1();
  console.log(child);  // 没问题
  console.log(child.getName());  // 会报错