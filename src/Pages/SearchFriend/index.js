import React, { Component } from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import Friend from '../../components/Friend';
import AppMenuBar from '../../components/AppMenuBar';

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

        this.state = {
            otherMember: [
                {
                    id: 70,
                    fname: 'Rawit',
                    lname: 'Lohakajornpun'
                },
                {
                    id: 71,
                    fname: 'Wiput',
                    lname: 'Pootong'
                },
                {
                    id: 72,
                    fname: 'Iam',
                    lname: 'Sometimes'
                },
                {
                    id: 73,
                    fname: 'Supakit',
                    lname: 'Teanthunyakit'
                },
                {
                    id: 74,
                    fname: 'Weeraphut',
                    lname: 'Subsohmboon'
                },
                {
                    id: 75,
                    fname: 'Heart',
                    lname: 'Rocker'
                },
                {
                    id: 76,
                    fname: 'Somchai',
                    lname: 'Manadee'
                },
                {
                    id: 77,
                    fname: 'Pannita',
                    lname: 'Hamego'
                },
                {
                    id: 78,
                    fname: 'Prapawit',
                    lname: 'Pathasiriwichot'
                },
            ],
            queryName: '',
            searchResult: {
                status: false,
                res: [],
            },
            error: false
        }
    }

    handleChangeQuery = e => {
        const value = e.target.value;

        this.setState(prevState => ({
            ...prevState,
            queryName: value,
        }));
    }

    handleSearch = e => {
        const { otherMember, queryName } = this.state;

        const result = otherMember.filter(member => member.fname == queryName || member.lname == queryName);
        console.log(result);

        if(result) {
            this.setState({
                searchResult: {
                    status: true,
                    res: result
                }
            })
        } else {
            this.setState({
                error: true,
            })
        }
    }

    render() {
        const { searchResult } = this.state;
        return(
            <>
            <AppMenuBar />
            <Main>
                <Search>
                    <h2 className="text-center mr-5 mb-5">ค้นหาเพื่อน</h2>
                    <div className="d-flex flex-row">
                        <input
                            type="text"
                            id="query"
                            className="form-control w-75 mr-3"
                            placeholder="ex. , เอก"
                            onChange={this.handleChangeQuery}
                        />
                        <button
                            type="button"
                            className="btn btn-outline-primary"
                            onClick={this.handleSearch}
                        >
                            <SearchIcon className="mr-2"/>
                            ค้นหา
                        </button>
                    </div>
                    <div className="mt-5"></div>
                    <Friend friends={searchResult.res} addFriend={true}></Friend>
                </Search>
            </Main>
            </>
        );
    }
}

SearchFriend.propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

export default SearchFriend;