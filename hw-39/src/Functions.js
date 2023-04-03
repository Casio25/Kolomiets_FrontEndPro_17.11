export function AddDevil(devilElem) {
    devilElem.setAttribute('value', parseInt(devilElem.getAttribute('value')) + 1);
    console.log(devilElem.getAttribute('value'));
}
export function SortResult(...args) {
    let defaultArray = [];

    for (let i = 0; i < args.length; i++) {
        defaultArray.push(parseInt(args[i].getAttribute('value')));
    }

    let sortedArray = defaultArray.sort((a, b) => b - a);
    console.log(sortedArray);

    let maxElement = args.find(elem => parseInt(elem.getAttribute('value')) === sortedArray[0]);
    const htmlElement = maxElement.textContent;
    console.log(maxElement.textContent)
    return(
        <div>
            {htmlElement}
        </div>
    );

}

