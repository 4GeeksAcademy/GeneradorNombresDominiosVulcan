
  let pron = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let domain = ['.com', '.es'];

  for (let p = 0; p < pron.length; p++) {
    for (let a = 0; a< adj.length; a++) {
      for (let s = 0; s < noun.length; s++) {
        for (let d = 0; d < domain.length; d++) {
          let dom = pron[p] + adj[a] + noun[s] + domain[d];
          console.log(dom)
          }
        }
      }
    }
  