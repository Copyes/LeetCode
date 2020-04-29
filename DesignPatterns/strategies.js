const strategies = {
  checkRole: (val) => {
    if(val === 'FE') {
      return true;
    }
    return false;
  },
  checkGrade: (val) => {
    if(val >= 5) {
      return true;
    }
    return false;
  },
  checkJob: (val) => {
    if(val === 'enginer') {
      return true;
    }
    return false;
  },
  checkSex: (val) => {
    if(val === 'male') {
      return true;
    }
    return false;
  }
}

class Validator {
  constructor() {
    this.cache = [];
  }

  add(method, val) {
    this.cache.push(() => {
      return strategies[method](val);
    });
  }
  check() {
    for (let i = 0; i < this.cache.length; i++) {
      let validFn = this.cache[i];
      let data = validFn();
      if(!data) {
        return false;
      }
    }
    return true;
  }
}

var compose1 = function() {
  var validator = new Validator();
  const data1 = {
    role: 'FE',
    grade: 3
  };
  validator.add('checkRole', data1.role);
  validator.add('checkGrade', data1.grade);
  const result = validator.check();
  return result;
};
console.log(compose1());