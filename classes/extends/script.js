class Veiculo {
    constructor(rodas) {
      this.rodas = rodas;
    }
    acelerar() {
      console.log('Acelerou');
    }
  }
  
  class Moto extends Veiculo {
    empinar() {
      console.log('Empinou com ' + this.rodas + ' rodas');
    }
  }
  
  const honda = new Moto(2);
  honda.empinar();
  



  class Veiculo {
    constructor(rodas) {
      this.rodas = rodas;
    }
    acelerar() {
      console.log('Acelerou');
    }
  }
  
  class Moto extends Veiculo {
    acelerar() {
      console.log('Acelerou muito');
    }
  }
  
  const honda = new Moto(2);
  honda.acelerar();
  


  class Veiculo {
    constructor(rodas) {
      this.rodas = rodas;
    }
    acelerar() {
      console.log('Acelerou');
    }
  }
  
  class Moto extends Veiculo {
    acelerar() {
      super.acelerar();
      console.log('Muito');
    }
  }
  
  const honda = new Moto(2);
  honda.acelerar();
  

  class Veiculo {
    constructor(rodas, combustivel) {
      this.rodas = rodas;
      this.combustivel = combustivel;
    }
  }
  
  class Moto extends Veiculo {
    constructor(rodas, combustivel, capacete) {
      super(rodas, combustivel);
      this.capacete = capacete;
    }
  }
  
  const honda = new Moto(4, 'Gasolina', true);
  