function isReachableAtTime(sx: number, sy: number, fx: number, fy: number, t: number): boolean {

    if (sx==fx&&sy==fy)return t!==1
    if(Math.abs(fx-sx)>t)return false
    if(Math.abs(fy-sy)>t) return false
    return true

};