module.exports = function () {
  return async (ctx, next) => {
    // ctx 扩展
    ctx._ok = ({ code = 200, data = null, message = null }) => {
      ctx.body = { code, data, message };
    };
    ctx._error = ({ code = 400, data = null, message = null }) => {
      ctx.body = { code, data, message };
    };

    // 跨域处理
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    // OPTIONS 请求
    if (ctx.method == 'OPTIONS') {
      ctx.body = 200;
    } else {
      await next();
    }
  }
};
