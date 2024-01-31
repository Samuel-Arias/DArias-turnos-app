export const convertParams = (params: string): {month: number, day: number} => {
  const splitParams = params.split('&');
  
  const monthSplit = splitParams[0].slice(1).split('=')
  const daySplit = splitParams[1].split('=')
  
  return {
    month: parseInt(monthSplit[1]),
    day: parseInt(daySplit[1])
  }
} 