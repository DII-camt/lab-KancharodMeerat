const hanoi = (n, from, to, aux) => {
    if (n === 0) return;
    hanoi(n - 1, from, aux, to);
    console.log(`${from} --> ${to}`);
    document.getElementById('output').innerText += `${from} --> ${to}\n`;
    hanoi(n - 1, aux, to, from);
};

// เรียกใช้ function hanoi
hanoi(3, 'A', 'C', 'B');