import React, { Component } from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';

const Main = Styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Search = Styled.div`
  width: 50%;
`;


class SearchFriend extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Main>
                <Search>
                    <h2 className="text-center mr-5 mb-5">ค้นหาเพื่อน</h2>
                    <div className="d-flex flex-row">
                        <input
                            type="text"
                            id="query"
                            className="form-control w-75 mr-3"
                            placeholder="ex. พีรพล, เอก"
                            onChange={this.handleChangeQuery}
                        />
                        <button
                            type="button"
                            className="btn btn-outline-primary"
                        >
                            <SearchIcon className="mr-2"/>
                            ค้นหา
                        </button>
                    </div>
                </Search>
            </Main>
        );
    }
}

export default SearchFriend;