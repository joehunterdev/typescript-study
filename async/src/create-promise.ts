const tick = Date.now();
let msg: string = "";
//log function
const log = (msg: string) => console.log(`${msg} Elapsed: ${Date.now() - tick}`);

//function to block execution
const codeBlocker = () => {
    
  //Create promise add code and assign to resolve when done
  //Beware this is not off the main thread
  //    return new Promise<string>(function (resolve, reject) {
  //     let i = 0;
  //     while (i < 100000000) {
  //       i++;
  //     }
  //     resolve("🥪 Blocking code completed");
  //    });

  return Promise.resolve().then((v) => {
    let i = 0;
    while (i < 1000000000) { // 1 billion
        i++;
    }
    return "🥪 Blocking code completed";
  });

};

log("🍞 Synchronous 1");

//Now codeblicker will return a promise
codeBlocker().then(log); // Log the resolved value implicitly 

log("🧀 Synchronous 2");
