import React from 'react';

function AddPlace (){
  return(
    <div className="container bg-white card mb-0">
    <div className="row">
        <div className="col-md-3">
            <div className="section">
                <section className="text-center">
                    <div className="fileinput fileinput-new text-center" data-provides="fileinput">
                        <div className="fileinput-new thumbnail img-circle img-raised">
                            <img src="../assets/img/placeholder.jpg" alt="..."/>
                        </div>
                        <div className="fileinput-preview fileinput-exists thumbnail img-circle img-raised"></div>
                        <div>
                            <span className="btn btn-raised btn-round btn-primary btn-file btn-sm mx-auto mt-3">
                                <span className="fileinput-new">Add Photo</span>
                                <span className="fileinput-exists">Change</span>
                                <input type="file" name="..."/></span>
                            <br>
                            <a href="#pablo" className="btn btn-danger btn-round fileinput-exists btn-simple btn-sm"
                                data-dismiss="fileinput"><i className="tim-icons icon-simple-remove"></i> Remove</a>
                        </div>
                    </div>
                    <h3 className="title mt-4">Charlie Bailey</h3>
                </section>

                <section>
                    <br>
                    <ul className="nav flex-column" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#link1" role="tablist">
                                <i className="tim-icons icon-single-02"></i>
                                General
                            </a>
                        </li>
                        <hr className="line-primary">
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#link2" role="tablist">
                                <i className="tim-icons icon-credit-card"></i>
                                Billing
                            </a>
                        </li>
                        <hr className="line-primary">
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#link3" role="tablist">
                                <i className="tim-icons icon-lock-circle"></i>
                                Security
                            </a>
                        </li>
                        <hr className="line-primary">
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#link4" role="tablist">
                                <i className="tim-icons icon-volume-98"></i>
                                Notifications
                            </a>
                        </li>
                    </ul>
                </section>
                <br><br><br>
                <div>
                    <div className="progress-container progress-primary">
                        <span className="progress-badge">Profile Completion</span>
                        <div className="progress-wrapper">
                            <div className="progress-info">
                                <div className="progress-percentage">
                                    <span className="text-primary">80%</span>
                                </div>
                            </div>
                            <div className="progress">
                                <div class="progress-bar bg-primary" role="progressbar" aria-valuemin="80"
                                    aria-valuemax="0" aria-valuemin="100" style="width: 80%;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-8 ml-auto">
            <div className="section">
                <div className="tab-content">
                    <div className="tab-pane active" id="link1">
                        <div>
                            <header>
                                <h2 className="text-uppercase">General information</h2>
                            </header>
                            <hr className="line-primary"/><br/>
                            <div className="row">
                                <div className="col-md-3 align-self-center">
                                    <label className="labels" htmlFor="#firstName">First Name</label>
                                </div>
                                <div className="col-md-9 align-self-center">
                                    <div className="form-group">
                                        <input id="firstName" name="firstName" className="form-control" type="text"
                                            value="Charlie" required />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 align-self-center">
                                    <label className="labels" htmlFor="#lastName">Last Name</label>
                                </div>
                                <div className="col-md-9 align-self-center">
                                    <div className="form-group">
                                        <input id="lastName" name="lastName" className="form-control" type="text"
                                            value="Bailey" required/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 align-self-center">
                                    <label className="labels">I’m</label>
                                </div>
                                <div className="col-md-4 align-self-center">
                                    <div className="form-group">
                                        <div className="choices" data-type="select-one" role="combobox" tabIndex="0"
                                            aria-autocomplete="list" aria-haspopup="true" aria-expanded="false"
                                            dir="ltr">
                                            <div className="choices__inner"><select
                                                    className="form-control choices__input is-hidden" data-trigger=""
                                                    name="choices-single-default" id="choices-single-default"
                                                    tabIndex="-1" aria-hidden="true" data-choice="active">
                                                    <option value="2" selected="">Male</option>
                                                </select>
                                                <div className="choices__list choices__list--single">
                                                    <div className="choices__item choices__item--selectable"
                                                        data-item="" data-id="1" data-value="2" aria-selected="true">
                                                        Male
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="choices__list choices__list--dropdown"
                                                aria-expanded="false"><input type="text"
                                                    className="choices__input choices__input--cloned" autoComplete="off"
                                                    autoCapitalize="off" spellcheck="false" role="textbox"
                                                    aria-autocomplete="list" placeholder="">
                                                <div className="choices__list" dir="ltr" role="listbox">
                                                    <div className="choices__item choices__item--choice choices__item--selectable is-highlighted"
                                                        data-select-text="Press to select" data-choice="" data-id="1"
                                                        data-value="3" data-choice-selectable=""
                                                        id="choices--choices-single-default-item-choice-1" role="option"
                                                        aria-selected="true">
                                                        Female
                                                    </div>
                                                    <div className="choices__item choices__item--choice choices__item--selectable"
                                                        data-select-text="Press to select" data-choice="" data-id="2"
                                                        data-value="2" data-choice-selectable=""
                                                        id="choices--choices-single-default-item-choice-2"
                                                        role="option">
                                                        Male
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 align-self-center">
                                    <label className="labels">Birth Date</label>
                                </div>
                                <div className="col-md-9 align-self-center">
                                    <div className="row">
                                        <div className="col-md-4 align-self-center">
                                            <div className="form-group">
                                                <div className="choices" data-type="select-one" role="combobox"
                                                    tabIndex="0" aria-autocomplete="list" aria-haspopup="true"
                                                    aria-expanded="false" dir="ltr">
                                                    <div className="choices__inner"><select
                                                            className="form-control choices__input is-hidden"
                                                            data-trigger="" name="choices-single-default"
                                                            id="choices-single-default" tabIndex="-1" aria-hidden="true"
                                                            data-choice="active">
                                                            <option value="April" selected="">April</option>
                                                        </select>
                                                        <div className="choices__list choices__list--single">
                                                            <div className="choices__item choices__item--selectable"
                                                                data-item="" data-id="1" data-value="April"
                                                                aria-selected="true">
                                                                April
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="choices__list choices__list--dropdown"
                                                        aria-expanded="false"><input type="text"
                                                            className="choices__input choices__input--cloned"
                                                            autoComplete="off" autoCapitalize="off" spellcheck="false"
                                                            role="textbox" aria-autocomplete="list" placeholder="">
                                                        <div className="choices__list" dir="ltr" role="listbox">
                                                            <div className="choices__item choices__item--choice choices__item--selectable is-highlighted"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="1" data-value="April" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-1"
                                                                role="option" aria-selected="true">
                                                                April
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="2" data-value="August"
                                                                data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-2"
                                                                role="option">
                                                                August
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="3" data-value="December"
                                                                data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-3"
                                                                role="option">
                                                                December
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="4" data-value="February"
                                                                data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-4"
                                                                role="option">
                                                                February
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="5" data-value="January"
                                                                data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-5"
                                                                role="option">
                                                                January
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="6" data-value="July" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-6"
                                                                role="option">
                                                                July
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="7" data-value="June" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-7"
                                                                role="option">
                                                                June
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="8" data-value="March" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-8"
                                                                role="option">
                                                                March
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="9" data-value="May" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-9"
                                                                role="option">
                                                                May
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="10" data-value="November"
                                                                data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-10"
                                                                role="option">
                                                                November
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="11" data-value="October"
                                                                data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-11"
                                                                role="option">
                                                                October
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="12" data-value="September"
                                                                data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-12"
                                                                role="option">
                                                                September
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <div className="choices" data-type="select-one" role="combobox"
                                                    tabIndex="0" aria-autocomplete="list" aria-haspopup="true"
                                                    aria-expanded="false" dir="ltr">
                                                    <div className="choices__inner"><select
                                                            className="form-control choices__input is-hidden"
                                                            data-trigger="" name="choices-single-default"
                                                            id="choices-single-default" tabIndex="-1" aria-hidden="true"
                                                            data-choice="active">
                                                            <option value="11" selected="">11</option>
                                                        </select>
                                                        <div className="choices__list choices__list--single">
                                                            <div className="choices__item choices__item--selectable"
                                                                data-item="" data-id="1" data-value="11"
                                                                aria-selected="true">
                                                                11
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="choices__list choices__list--dropdown"
                                                        aria-expanded="false"><input type="text"
                                                            className="choices__input choices__input--cloned"
                                                            autoComplete="off" autoCapitalize="off" spellcheck="false"
                                                            role="textbox" aria-autocomplete="list" placeholder="">
                                                        <div className="choices__list" dir="ltr" role="listbox">
                                                            <div className="choices__item choices__item--choice choices__item--selectable is-highlighted"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="1" data-value="1" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-1"
                                                                role="option" aria-selected="true">
                                                                1
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="2" data-value="10" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-2"
                                                                role="option">
                                                                10
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="3" data-value="11" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-3"
                                                                role="option">
                                                                11
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="4" data-value="12" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-4"
                                                                role="option">
                                                                12
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="5" data-value="13" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-5"
                                                                role="option">
                                                                13
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="6" data-value="14" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-6"
                                                                role="option">
                                                                14
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="7" data-value="15" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-7"
                                                                role="option">
                                                                15
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="8" data-value="16" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-8"
                                                                role="option">
                                                                16
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="9" data-value="17" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-9"
                                                                role="option">
                                                                17
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="10" data-value="18" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-10"
                                                                role="option">
                                                                18
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="11" data-value="19" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-11"
                                                                role="option">
                                                                19
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="12" data-value="2" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-12"
                                                                role="option">
                                                                2
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="13" data-value="20" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-13"
                                                                role="option">
                                                                20
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="14" data-value="21" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-14"
                                                                role="option">
                                                                21
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="15" data-value="22" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-15"
                                                                role="option">
                                                                22
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="16" data-value="23" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-16"
                                                                role="option">
                                                                23
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="17" data-value="24" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-17"
                                                                role="option">
                                                                24
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="18" data-value="25" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-18"
                                                                role="option">
                                                                25
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="19" data-value="26" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-19"
                                                                role="option">
                                                                26
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="20" data-value="27" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-20"
                                                                role="option">
                                                                27
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="21" data-value="28" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-21"
                                                                role="option">
                                                                28
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="22" data-value="29" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-22"
                                                                role="option">
                                                                29
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="23" data-value="3" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-23"
                                                                role="option">
                                                                3
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="24" data-value="30" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-24"
                                                                role="option">
                                                                30
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="25" data-value="31" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-25"
                                                                role="option">
                                                                31
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="26" data-value="4" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-26"
                                                                role="option">
                                                                4
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="27" data-value="5" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-27"
                                                                role="option">
                                                                5
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="28" data-value="6" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-28"
                                                                role="option">
                                                                6
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="29" data-value="7" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-29"
                                                                role="option">
                                                                7
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="30" data-value="8" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-30"
                                                                role="option">
                                                                8
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="31" data-value="9" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-31"
                                                                role="option">
                                                                9
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <div className="choices" data-type="select-one" role="combobox"
                                                    tabIndex="0" aria-autocomplete="list" aria-haspopup="true"
                                                    aria-expanded="false" dir="ltr">
                                                    <div className="choices__inner"><select
                                                            className="form-control choices__input is-hidden"
                                                            data-trigger="" name="choices-single-default"
                                                            id="choices-single-default" tabIndex="-1" aria-hidden="true"
                                                            data-choice="active">
                                                            <option value="1989" selected="">1989</option>
                                                        </select>
                                                        <div className="choices__list choices__list--single">
                                                            <div className="choices__item choices__item--selectable"
                                                                data-item="" data-id="1" data-value="1989"
                                                                aria-selected="true">
                                                                1989
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="choices__list choices__list--dropdown"
                                                        aria-expanded="false"><input type="text"
                                                            className="choices__input choices__input--cloned"
                                                            autoComplete="off" autoCapitalize="off" spellcheck="false"
                                                            role="textbox" aria-autocomplete="list" placeholder="">
                                                        <div className="choices__list" dir="ltr" role="listbox">
                                                            <div className="choices__item choices__item--choice choices__item--selectable is-highlighted"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="1" data-value="1986" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-1"
                                                                role="option" aria-selected="true">
                                                                1986
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="2" data-value="1987" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-2"
                                                                role="option">
                                                                1987
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="3" data-value="1988" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-3"
                                                                role="option">
                                                                1988
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="4" data-value="1989" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-4"
                                                                role="option">
                                                                1989
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="5" data-value="1990" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-5"
                                                                role="option">
                                                                1990
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="6" data-value="1991" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-6"
                                                                role="option">
                                                                1991
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="7" data-value="1992" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-7"
                                                                role="option">
                                                                1992
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="8" data-value="1993" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-8"
                                                                role="option">
                                                                1993
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="9" data-value="1994" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-9"
                                                                role="option">
                                                                1994
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="10" data-value="1995" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-10"
                                                                role="option">
                                                                1995
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="11" data-value="1996" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-11"
                                                                role="option">
                                                                1996
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="12" data-value="1997" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-12"
                                                                role="option">
                                                                1997
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="13" data-value="1998" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-13"
                                                                role="option">
                                                                1998
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="14" data-value="1999" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-14"
                                                                role="option">
                                                                1999
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="15" data-value="2000" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-15"
                                                                role="option">
                                                                2000
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="16" data-value="2001" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-16"
                                                                role="option">
                                                                2001
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="17" data-value="2002" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-17"
                                                                role="option">
                                                                2002
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="18" data-value="2003" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-18"
                                                                role="option">
                                                                2003
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="19" data-value="2004" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-19"
                                                                role="option">
                                                                2004
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="20" data-value="2005" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-20"
                                                                role="option">
                                                                2005
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="21" data-value="2006" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-21"
                                                                role="option">
                                                                2006
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="22" data-value="2007" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-22"
                                                                role="option">
                                                                2007
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="23" data-value="2008" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-23"
                                                                role="option">
                                                                2008
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="24" data-value="2009" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-24"
                                                                role="option">
                                                                2009
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="25" data-value="2010" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-25"
                                                                role="option">
                                                                2010
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="26" data-value="2011" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-26"
                                                                role="option">
                                                                2011
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="27" data-value="2012" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-27"
                                                                role="option">
                                                                2012
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="28" data-value="2013" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-28"
                                                                role="option">
                                                                2013
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="29" data-value="2014" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-29"
                                                                role="option">
                                                                2014
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="30" data-value="2015" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-30"
                                                                role="option">
                                                                2015
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="31" data-value="2016" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-31"
                                                                role="option">
                                                                2016
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="32" data-value="2017" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-32"
                                                                role="option">
                                                                2017
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="33" data-value="2018" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-33"
                                                                role="option">
                                                                2018
                                                            </div>
                                                            <div className="choices__item choices__item--choice choices__item--selectable"
                                                                data-select-text="Press to select" data-choice=""
                                                                data-id="34" data-value="2019" data-choice-selectable=""
                                                                id="choices--choices-single-default-item-choice-34"
                                                                role="option">
                                                                2019
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 align-self-center">
                                    <label className="labels" htmlFor="#email">Email</label>
                                </div>
                                <div className="col-md-9 align-self-center">
                                    <div className="form-group">
                                        <input id="email" name="email" className="form-control" type="email"
                                            value="charlie.bailey@example.com" required>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 align-self-center">
                                    <label className="labels" htmlFor="#confirmEmail">Confirm Email</label>
                                </div>
                                <div className="col-md-9 align-self-center">
                                    <div className="form-group">
                                        <input id="confirmEmail" name="confirmEmail" className="form-control" type="email"
                                            value="charlie.bailey@example.com" required>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 align-self-center">
                                    <label className="labels" htmlFor="#location">Your Location</label>
                                </div>
                                <div className="col-md-9 align-self-center">
                                    <div className="form-group">
                                        <input id="location" name="location" className="form-control" type="text"
                                            value="Sydney, A" required>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 align-self-center">
                                    <label className="labels" htmlFor="#phone">Phone Number</label>
                                </div>
                                <div className="col-md-4 align-self-center">
                                    <div className="form-group">
                                        <input id="phone" name="phone" className="form-control" type="tel"
                                            value="+40 745 031 200" required>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 align-self-center">
                                    <label className="labels">Language</label>
                                </div>
                                <div className="col-md-4 align-self-center">
                                    <div className="form-group">
                                        <div className="choices" data-type="select-one" role="combobox" tabIndex="0"
                                            aria-autocomplete="list" aria-haspopup="true" aria-expanded="false"
                                            dir="ltr">
                                            <div className="choices__inner"><select
                                                    className="form-control choices__input is-hidden" data-trigger=""
                                                    name="choices-single-default" id="choices-single-default"
                                                    tabIndex="-1" aria-hidden="true" data-choice="active">
                                                    <option value="English" selected="">English</option>
                                                </select>
                                                <div className="choices__list choices__list--single">
                                                    <div className="choices__item choices__item--selectable"
                                                        data-item="" data-id="1" data-value="English"
                                                        aria-selected="true">
                                                        English
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="choices__list choices__list--dropdown"
                                                aria-expanded="false"><input type="text"
                                                    className="choices__input choices__input--cloned" autoComplete="off"
                                                    autoCapitalize="off" spellcheck="false" role="textbox"
                                                    aria-autocomplete="list" placeholder="">
                                                <div className="choices__list" dir="ltr" role="listbox">
                                                    <div className="choices__item choices__item--choice choices__item--selectable is-highlighted"
                                                        data-select-text="Press to select" data-choice="" data-id="1"
                                                        data-value="4" data-choice-selectable=""
                                                        id="choices--choices-single-default-item-choice-1" role="option"
                                                        aria-selected="true">
                                                        Deutsche
                                                    </div>
                                                    <div className="choices__item choices__item--choice choices__item--selectable"
                                                        data-select-text="Press to select" data-choice="" data-id="2"
                                                        data-value="English" data-choice-selectable=""
                                                        id="choices--choices-single-default-item-choice-2"
                                                        role="option">
                                                        English
                                                    </div>
                                                    <div className="choices__item choices__item--choice choices__item--selectable"
                                                        data-select-text="Press to select" data-choice="" data-id="3"
                                                        data-value="2" data-choice-selectable=""
                                                        id="choices--choices-single-default-item-choice-3"
                                                        role="option">
                                                        French
                                                    </div>
                                                    <div className="choices__item choices__item--choice choices__item--selectable"
                                                        data-select-text="Press to select" data-choice="" data-id="4"
                                                        data-value="4" data-choice-selectable=""
                                                        id="choices--choices-single-default-item-choice-4"
                                                        role="option">
                                                        Russian
                                                    </div>
                                                    <div className="choices__item choices__item--choice choices__item--selectable"
                                                        data-select-text="Press to select" data-choice="" data-id="5"
                                                        data-value="3" data-choice-selectable=""
                                                        id="choices--choices-single-default-item-choice-5"
                                                        role="option">
                                                        Spanish
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 align-self-center">
                                    <label className="labels">Skills</label>
                                </div>
                                <div className="col-md-9 align-self-center">
                                    <div className="choices" data-type="text" aria-haspopup="true" aria-expanded="false"
                                        dir="ltr">
                                        <div className="choices__inner"><input id="badges" type="text"
                                                value="VueJs,Angular,Laravel,React" placeholder="+ Add"
                                                className="choices__input is-hidden" tabIndex="-1" aria-hidden="true"
                                                data-choice="active">
                                            <div className="choices__list choices__list--multiple">
                                                <div className="choices__item choices__item--selectable" data-item=""
                                                    data-id="1" data-value="VueJs" data-custom-properties="null"
                                                    data-deletable="" aria-selected="true">
                                                    VueJs
                                                    <!--
       --><button type="button" className="choices__button" data-button="" aria-label="Remove item: 'VueJs'">
                                                        Remove item
                                                    </button>
                                                </div>
                                                <div className="choices__item choices__item--selectable" data-item=""
                                                    data-id="2" data-value="Angular" data-custom-properties="null"
                                                    data-deletable="" aria-selected="true">
                                                    Angular
                                                    <!--
       --><button type="button" className="choices__button" data-button="" aria-label="Remove item: 'Angular'">
                                                        Remove item
                                                    </button>
                                                </div>
                                                <div className="choices__item choices__item--selectable" data-item=""
                                                    data-id="3" data-value="Laravel" data-custom-properties="null"
                                                    data-deletable="" aria-selected="true">
                                                    Laravel
                                                    <!--
       --><button type="button" className="choices__button" data-button="" aria-label="Remove item: 'Laravel'">
                                                        Remove item
                                                    </button>
                                                </div>
                                                <div className="choices__item choices__item--selectable" data-item=""
                                                    data-id="4" data-value="React" data-custom-properties="null"
                                                    data-deletable="" aria-selected="true">
                                                    React
                                                    <!--
       --><button type="button" className="choices__button" data-button="" aria-label="Remove item: 'React'">
                                                        Remove item
                                                    </button>
                                                </div>
                                            </div><input type="text" class="choices__input choices__input--cloned"
                                                autocomplete="off" autocapitalize="off" spellcheck="false"
                                                role="textbox" aria-autocomplete="list" placeholder="+ Add"
                                                style="width: 47px;">
                                        </div>
                                        <div className="choices__list choices__list--dropdown" aria-expanded="false">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-md-6">
                                    <button className="btn btn-primary" type="submit">Save Changes</button>
                                    <button className="btn btn-outline-primary" type="reset">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane" id="link2">
                        <header>
                            <h2 className="text-uppercase">Billing method</h2>
                        </header>
                        <hr className="line-primary"><br>
                        <table className="table align-items-center">
                            <thead>
                                <tr>
                                    <th scope="col">Card Type</th>
                                    <th scope="col">Card Number</th>
                                    <th scope="col">Payment Method</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        <img alt="Image" src="../assets/img/visas.png" className="avatar">
                                    </th>
                                    <td>
                                        <span className="d-block">•••• •••• •••• 8372</span>
                                        <small className="text-muted">Exp: 06/22</small>
                                    </td>
                                    <td className="text-center">
                                        <div className="custom-control custom-radio">
                                            <input name="custom-radio-1" class="custom-control-input" id="Radios1"
                                                checked="" type="radio">
                                            <label className="custom-control-label" htmlFor="Radios1"></label>
                                        </div>
                                    </td>
                                    <td>
                                        <button type="submit" className="btn btn-danger btn-sm btn-simple">
                                            <i className="tim-icons icon-simple-remove"></i>
                                            Remove card
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <img alt="Image" src="../assets/img/mastercard.png"
                                            className="avatar mastercard">
                                    </th>
                                    <td>
                                        <span className="d-block">•••• •••• •••• 1225</span>
                                        <small className="text-muted">Exp: 07/21</small>
                                    </td>
                                    <td className="text-center">
                                        <div className="custom-control custom-radio">
                                            <input name="custom-radio-1" className="custom-control-input" id="Radios2"
                                                type="radio">
                                            <label className="custom-control-label" htmlFor="Radios2">
                                            </label>
                                        </div>
                                    </td>
                                    <td>
                                        <button type="submit" className="btn btn-danger btn-sm btn-simple">
                                            <i className="tim-icons icon-simple-remove"></i>
                                            Remove card
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="btn btn-primary btn-sm">
                            <i className="tim-icons icon-simple-add"></i>
                            Add card
                        </button>
                    </div>
                    <div className="tab-pane" id="link3">
                        <div
                            className="g-pos-rel h-100 g-brd-around g-brd-gray-light-v7 g-rounded-4 g-pa-15 g-pa-30--md">
                            <header>
                                <h2
                                    className="text-uppercase g-font-size-12 g-font-size-default--md g-color-black mb-0">
                                    Security Questions</h2>
                            </header>
                            <hr className="line-primary">
                            <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Security Question</label>
                                        <div className="form-group">
                                            <div className="choices" data-type="select-one" role="combobox" tabIndex="0"
                                                aria-autocomplete="list" aria-haspopup="true" aria-expanded="false"
                                                dir="ltr">
                                                <div className="choices__inner"><select
                                                        className="form-control choices__input is-hidden"
                                                        data-trigger="" name="choices-single-default"
                                                        id="choices-single-default" tabIndex="-1" aria-hidden="true"
                                                        data-choice="active">
                                                        <option value="Your Question" selected="">Your Question</option>
                                                    </select>
                                                    <div className="choices__list choices__list--single">
                                                        <div className="choices__item choices__item--selectable"
                                                            data-item="" data-id="1" data-value="Your Question"
                                                            aria-selected="true">
                                                            Your Question
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="choices__list choices__list--dropdown"
                                                    aria-expanded="false"><input type="text"
                                                        className="choices__input choices__input--cloned"
                                                        autoComplete="off" autoCapitalize="off" spellcheck="false"
                                                        role="textbox" aria-autocomplete="list" placeholder="">
                                                    <div className="choices__list" dir="ltr" role="listbox">
                                                        <div className="choices__item choices__item--choice choices__item--selectable is-highlighted"
                                                            data-select-text="Press to select" data-choice=""
                                                            data-id="1" data-value="2" data-choice-selectable=""
                                                            id="choices--choices-single-default-item-choice-1"
                                                            role="option" aria-selected="true">
                                                            Question 1
                                                        </div>
                                                        <div className="choices__item choices__item--choice choices__item--selectable"
                                                            data-select-text="Press to select" data-choice=""
                                                            data-id="2" data-value="3" data-choice-selectable=""
                                                            id="choices--choices-single-default-item-choice-2"
                                                            role="option">
                                                            Question 2
                                                        </div>
                                                        <div className="choices__item choices__item--choice choices__item--selectable"
                                                            data-select-text="Press to select" data-choice=""
                                                            data-id="3" data-value="4" data-choice-selectable=""
                                                            id="choices--choices-single-default-item-choice-3"
                                                            role="option">
                                                            Question 3
                                                        </div>
                                                        <div className="choices__item choices__item--choice choices__item--disabled"
                                                            data-select-text="Press to select" data-choice=""
                                                            data-id="4" data-value="Your Question"
                                                            data-choice-disabled="" aria-disabled="true"
                                                            id="choices--choices-single-default-item-choice-4"
                                                            role="option">
                                                            Your Question
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label>Your Answer</label>
                                        <div className="form-group">
                                            <input className="form-control" type="text" placeholder="Enter your answer">
                                        </div>
                                    </div>
                                </div>
                                <br><br>
                                <header>
                                    <h2 className="text-uppercase">Security Settings</h2>
                                </header>
                                <hr className="line-primary">
                                <div className="form-group d-flex align-items-center justify-content-between">
                                    <span>Notify me via email when logging in</span>
                                    <label className="custom-toggle">
                                        <input type="checkbox">
                                        <span className="custom-toggle-slider rounded-circle" data-label-off="OFF"
                                            data-label-on="ON"></span>
                                    </label>
                                </div>
                                <div className="form-group d-flex align-items-center justify-content-between">
                                    <span>Send SMS confirmation for all online payments</span>
                                    <label className="custom-toggle">
                                        <input type="checkbox" checked="">
                                        <span className="custom-toggle-slider rounded-circle" data-label-off="OFF"
                                            data-label-on="ON"></span>
                                    </label>
                                </div>
                                <div className="form-group d-flex align-items-center justify-content-between">
                                    <span>Check which devices accessed your account</span>
                                    <label className="custom-toggle">
                                        <input type="checkbox">
                                        <span className="custom-toggle-slider rounded-circle" data-label-off="OFF"
                                            data-label-on="ON"></span>
                                    </label>
                                </div>
                                <div className="form-group d-flex align-items-center justify-content-between">
                                    <span>Find My Device, make sure your device can be found if it gets lost</span>
                                    <label className="custom-toggle">
                                        <input type="checkbox" checked="">
                                        <span className="custom-toggle-slider rounded-circle" data-label-off="OFF"
                                            data-label-on="ON"></span>
                                    </label>
                                </div>
                                <div className="form-group d-flex align-items-center justify-content-between">
                                    <span>Lock your device with a PIN, pattern, or password</span>
                                    <label className="custom-toggle">
                                        <input type="checkbox" checked="">
                                        <span className="custom-toggle-slider rounded-circle" data-label-off="OFF"
                                            data-label-on="ON"></span>
                                    </label>
                                </div>
                                <div className="form-group d-flex align-items-center justify-content-between">
                                    <span>Manage what apps have access to app-usage data on your device</span>
                                    <label className="custom-toggle">
                                        <input type="checkbox">
                                        <span className="custom-toggle-slider rounded-circle" data-label-off="OFF"
                                            data-label-on="ON"></span>
                                    </label>
                                </div>
                                <div className="row mt-5 justify-content-end">
                                    <div className="col-md-4 actions">
                                        <button className="btn btn-outline-primary btn-sm" type="reset">Cancel</button>
                                        <button className="btn btn-primary btn-sm" type="button">Save Changes</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="tab-pane" id="link4">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="alert alert-primary text-small" role="alert">
                                        <i className="icon-shield"></i>
                                        <span>
                                            We will never distribute your email address to third parties. Read about
                                            email communication in our privacy policy.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div className="row">
                                <div className="col-12">
                                    <form>
                                        <h5 className="mb-4">Notification Preferences</h5>
                                        <div className="custom-control custom-checkbox mb-3">
                                            <input class="custom-control-input" id="notification1" type="checkbox"
                                                checked="">
                                            <label className="custom-control-label" htmlFor="notification1">
                                                <span>Someone mentions me</span>
                                            </label>
                                        </div>
                                        <div className="custom-control custom-checkbox mb-3">
                                            <input class="custom-control-input" id="notification2" type="checkbox"
                                                checked="">
                                            <label className="custom-control-label" htmlFor="notification2">
                                                <span>Someone follows me</span>
                                            </label>
                                        </div>
                                        <div className="custom-control custom-checkbox mb-3">
                                            <input className="custom-control-input" id="notification3" type="checkbox">
                                            <label className="custom-control-label" htmlFor="notification3">
                                                <span>Someone shares my activty</span>
                                            </label>
                                        </div>
                                        <div className="custom-control custom-checkbox mb-3">
                                            <input className="custom-control-input" id="notification4" type="checkbox">
                                            <label className="custom-control-label" htmlFor="notification4">
                                                <span>Someone messages me</span>
                                            </label>
                                        </div>
                                        <div className="custom-control custom-checkbox mb-3">
                                            <input className="custom-control-input" id="notification5" type="checkbox">
                                            <label className="custom-control-label" htmlFor="notification5">
                                                <span>Someone adds me to a project</span>
                                            </label>
                                        </div>
                                        <div className="custom-control custom-checkbox mb-3">
                                            <input className="custom-control-input" id="notification6" type="checkbox">
                                            <label className="custom-control-label" htmlFor="notification6">
                                                <span>Sales and promotions</span>
                                            </label>
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-sm mt-3 mb-5">Update
                                            preferences</button>
                                    </form>
                                </div>
                            </div>
                            <hr>
                            <div className="row">
                                <div className="col-12">
                                    <form>
                                        <h5>Notification Frequency</h5>
                                        <div className="custom-control custom-radio mb-3">
                                            <input name="custom-radio-1" className="custom-control-input" id="freq1"
                                                type="radio">
                                            <label className="custom-control-label" htmlFor="freq1">
                                                <span>Daily</span>
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio mb-3">
                                            <input name="custom-radio-1" className="custom-control-input" id="freq2"
                                                type="radio">
                                            <label className="custom-control-label" htmlFor="freq2">
                                                <span>Weekly</span>
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio mb-3">
                                            <input name="custom-radio-1" className="custom-control-input" id="freq3"
                                                type="radio">
                                            <label className="custom-control-label" htmlFor="freq3">
                                                <span>Monthly</span>
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio mb-3">
                                            <input name="custom-radio-1" class="custom-control-input" id="freq4"
                                                checked="" type="radio">
                                            <label className="custom-control-label" htmlFor="freq4">
                                                <span>Never</span>
                                            </label>
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-sm mt-3">Update</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    );
}
export {AddPlace}