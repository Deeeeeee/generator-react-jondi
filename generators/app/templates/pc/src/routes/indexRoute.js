module.exports = {
	getComponent(nextState, cb) {
		require.ensure([], (require) => {
			cb(null, require('../containers/home').default);
		});
	}
};