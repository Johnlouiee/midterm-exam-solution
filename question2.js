function delayedGreeting(name) {
    setTimeout(() => {
      console.log(`Hello, ${name}!`);
    }, 2000); //2 secs
  }
  

  delayedGreeting("Alice");
  