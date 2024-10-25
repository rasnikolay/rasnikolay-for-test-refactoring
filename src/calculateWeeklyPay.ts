function calculateWeeklyPay(overtime: boolean): number {
  const tenthRate: number = getTenthRate();
  const tenthsWorked: number = getTenthsWorked();
  const straightTime: number = Math.min(400, tenthsWorked);
  const overTime: number = Math.max(0, tenthsWorked - straightTime);
  const straightPay: number = straightTime * tenthRate;
  const overtimeRate: number = overtime ? 1.5 * tenthRate : tenthRate;
  const overtimePay: number = overTime * overtimeRate;
  return straightPay + overtimePay;
}

/* Плохо:
  - overtimeRate - тернарник неверно был записан.
  - overtimePay - все же зарплату всем будет выгоднее получать точную))) Math.round излишен

  Стало лучше: синтаксические и логические ошибки исправлены
 */