/**
 * HOC компонента для оборачивания компонента в другой,
 * чтобы выводить его согласно количеству просмотров
 */

import React from "react";
import Popular from "./Popular";
import New from "./New";

const withWrapperList = (Component, ) => {
	return class extends React.Component {
		state = {};
		render() {
			if (this.props.views > 100) {
				return <Popular><Component {...this.props} /></Popular>
			}
			if (this.props.views <= 100) {
				return <New><Component {...this.props} /></New>
			}
			return <Component {...this.props} />
		}
	}
}

export default withWrapperList;