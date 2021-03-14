/*
function solution(participant, completion) {
    var dic = completion.reduce((obj, t) => (obj[t] = obj[t] ? obj[t] + 1 : 1, obj), {});
    return participant.find(t => {
        if (dic[t])
            dic[t] = dic[t] - 1;
        else
            return true;
    });
}
*/

function solution(participant, completion) {
    let p = participant.slice().sort();
    let c = completion.slice().sort();
    let len = p.length;

    for (let i = 0; i < len; i++) {
        if (p[i] != c[i]) {
            return p[i];
        }
    }
    return p[len - 1];
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]));
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));