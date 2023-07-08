export class HandleDate {
  constructor(
    private _Dayslist = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado']
  ){}

  public get toDay() {
    const dayNumber = new Date().getDay()
    return this._Dayslist[dayNumber]
  }

  public get daysOfWeek() {
    return this._Dayslist
  }
}