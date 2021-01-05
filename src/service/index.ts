/**
 * 模拟请求
 */
export const requestNavBar = function request() {
    return new Promise((resolve) => {
        setTimeout(resolve, 1000);
    }).then(() => {
        return [
            {
                id: 1,
                name: '页面-1',
                path: '/page-1',
                children: []
            },
            {
                id: 2,
                name: '页面-2',
                path: '/page-2',
                children: []
            }
        ];
    });
};
