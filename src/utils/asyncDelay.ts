
export const asyncApiDelay = (duration: number = 2000) => {
    return new Promise(resolve => setTimeout(resolve, duration));
};
