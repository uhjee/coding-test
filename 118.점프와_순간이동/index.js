function solution(n)
{
    let battery = 0;
    let rest = n;

    while(rest > 0) {
        if(rest%2 === 0) {
            rest = rest/2;
        } else {
            rest -= 1;
            battery += 1;
        }
    }


    return battery;
}

solution(5); //2
solution(6); //2
solution(5); //5
