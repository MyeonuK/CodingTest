function solution(genres, plays) {
    let answer = [];
    let sortedBestGenre = [];
    장르: 재생수

    let len = genres.length;

    bestGenre = [["a", 1], ["b", 2]];
    return bestGenre[0].indexOf("b");

    for (let i = 0; i < len; i++) {
        let temp = genres[i];
        let index = bestGenre.indexOf(temp, 0);

        if (index == -1) {
            bestGenre.push([temp, plays[i]]);
        }
        else {
            bestGenre[1][index] += plays[i];
        }
    }
    return bestGenre;
}

console.log(solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]));