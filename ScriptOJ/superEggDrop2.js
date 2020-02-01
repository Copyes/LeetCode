/**
 * 状态转移方程：
 * f(k,m) = f(k-1, m-1) + f(k, m-1) + 1
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
var superEggDrop2 = function(K, N) {
  if(K === 1 || N <= 2) return N;
  const aux = new Array(N);
  
  aux[0] = new Array(K).fill(1);
  for(let m = 1; m < N; m++) {
    aux[m] = new Array(K);

    aux[m][0] = m + 1;
    for(let e = 1; e < K; e++) {
      let f = aux[m-1][e-1] + aux[m-1][e] + 1;
      if(f >= N) {
        return m + 1;
      }
      aux[m][e] = f;
    }
  }
};