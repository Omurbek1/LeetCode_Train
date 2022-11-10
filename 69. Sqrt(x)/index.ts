
// Учитывая неотрицательное целое число x, вернуть квадратный корень из x, округленный в меньшую сторону до ближайшего целого числа. Возвращаемое целое число также должно быть неотрицательным.
// 
// Вы не должны использовать какие-либо встроенные экспонентные функции или операторы.

const mySqrt = (x) => {
    if (x <= 1) {
        return x
    }
    for (let i = 2; i <= x; i++){
        if (i * i === x) {
            return i
        }
        if (i * i > x) {
            return i-1
        }
    }
}