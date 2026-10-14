function solveTask() {
    const inputElement = document.getElementById('amountInput');
    const resultElement = document.getElementById('resultText');
    const amount = parseInt(inputElement.value, 10);

    // 1. Проверка на ввод корректного числа
    if (isNaN(amount) || amount <= 0) {
        resultElement.innerHTML = "<span style='color: red;'><b>Ошибка:</b> Введите положительную целую денежную сумму.</span>";
        return;
    }

    // 2. Проверка возможности размена:
    // Все номиналы (500, 100, 10, 2) делятся на 2 без остатка.
    // Если сумма нечетная, разменять ее монетами по 2 рубля невозможно (останется 1 рубль).
    if (amount % 2 !== 0) {
        resultElement.innerHTML = `
            <span style='color: brown;'>
                <b>Размен невозможен:</b> сумма <b>${amount} руб.</b> является нечётной.<br>
            </span>
        `;
        return;
    }

    // 3. Алгоритм размена
    let current = amount;

    const count500 = Math.floor(current / 500);
    current = current % 500;

    const count100 = Math.floor(current / 100);
    current = current % 100;

    const count10 = Math.floor(current / 10);
    current = current % 10;

    const count2 = Math.floor(current / 2);
    current = current % 2;

    // 4. Формирование подробного отчета
    resultElement.innerHTML = `
        <p style="color: green;"><b>Сумма ${amount} руб. успешно разменяна:</b></p>
        <ul>
            <li>Купюр по 500 руб.: <b>${count500} шт.</b> (${count500 * 500} руб.)</li>
            <li>Купюр по 100 руб.: <b>${count100} шт.</b> (${count100 * 100} руб.)</li>
            <li>Купюр по 10 руб.: <b>${count10} шт.</b> (${count10 * 10} руб.)</li>
            <li>Монет по 2 руб.: <b>${count2} шт.</b> (${count2 * 2} руб.)</li>
        </ul>
    `;
}