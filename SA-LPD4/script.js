const selectButton = document.getElementById("button");
const selectValue = document.getElementById("input");
const showValue = document.getElementById("show-result");

selectButton.addEventListener("click", () => {
    let n = parseInt(selectValue.value);

    function fibonacci(n) {
        let a = 0, b = 1;
        let result = [];
    
        for (let i = 0; i < n; i++) {
          result.push(a);
          [a, b] = [b, a + b];
        }
    
        return result;
    }
    
    let sequence = fibonacci(n);
    showValue.textContent = sequence.join(", ");
});