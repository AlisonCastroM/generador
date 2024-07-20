window.addEventListener('load', () => {
    const who = ['The dog', 'My grandma', 'The mailman', 'My bird', 'My hamster'];
    const action = ['ate', 'peed on', 'crushed', 'broke', 'stole'];
    const what = ['my homework', 'my phone', 'the car', 'my lunch'];
    const when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was fixing the car'];

    function generateExcuse() {
        const indexWho = Math.floor(Math.random() * who.length);
        const indexAction = Math.floor(Math.random() * action.length);
        const indexWhat = Math.floor(Math.random() * what.length);
        const indexWhen = Math.floor(Math.random() * when.length);

        return `${who[indexWho]} ${action[indexAction]} ${what[indexWhat]} ${when[indexWhen]}.`;
    }

    const excuseElement = document.getElementById('excuse');
    excuseElement.textContent = generateExcuse();
});