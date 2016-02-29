export function percentUtil (value :number) :string {
    return (value || 0).toFixed(2) + '%';
}

export default percentUtil
