export function kdRatio (kill :number, die :number) :string|number {
    return die ?
        kill ? (kill / die).toFixed(2) :
            0:
        kill;
}
