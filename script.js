let ratios = {};

function saveRatios() {
    ratios.eggWhites = parseFloat(document.getElementById('eggWhites').value);
    ratios.sugar = parseFloat(document.getElementById('sugar').value);
    ratios.almondFlour = parseFloat(document.getElementById('almondFlour').value);
    ratios.powderedSugar = parseFloat(document.getElementById('powderedSugar').value);

    document.getElementById('page1').classList.add('hidden');
    document.getElementById('page2').classList.remove('hidden');
}

function calculateIngredients() {
    let newEggWhites = parseFloat(document.getElementById('newEggWhites').value);
    if (!isNaN(newEggWhites)) {
        let factor = newEggWhites / ratios.eggWhites;
        document.getElementById('newSugar').value = (ratios.sugar * factor).toFixed(2);
        document.getElementById('newAlmondFlour').value = (ratios.almondFlour * factor).toFixed(2);
        document.getElementById('newPowderedSugar').value = (ratios.powderedSugar * factor).toFixed(2);
    } else {
        document.getElementById('newSugar').value = '';
        document.getElementById('newAlmondFlour').value = '';
        document.getElementById('newPowderedSugar').value = '';
    }
}

function goBack() {
    document.getElementById('page2').classList.add('hidden');
    document.getElementById('page1').classList.remove('hidden');
}
