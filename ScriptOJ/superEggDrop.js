/**
 * 状态转移方程：
 * f(K,X) = max(f(K-1, X-1), f(K, N-x)) + 1
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
var superEggDrop1 = function(K, N) {
    if(K === 1 || N === 2) return N;
    const aux = new Array(K);
    // 初始化一个K行， N+1列的二维数组（多一个0层方便计算）
    for(let i = 0; i < K; i++) {
      aux[i] = new Array(N + 1);
      // N<=2; f(K,N) = N;
      aux[i][0] = 0;
      aux[i][1] = 1;
      aux[i][2] = 2;
    }
    // k=1 f(K,N) = N;
    for(let i = 3; i <= N; i++) {
      aux[0][i] = i;
    }
    for(let e = 1; e < K; e++) {
      let x = 1;
      for (let f = 3; f <= N; f++) {
        // 取两个方程的交汇处
        if(aux[e - 1][x - 1] < aux[e][f - x]) {
          x++;
        }
        // f(K,X) = max(f(K-1, X-1), f(K, N-x)) + 1
        aux[e][f] = aux[e - 1][x - 1] + 1;
      }
    }
    return aux[K - 1][N];
};