import React from 'react'
import {
    Link
} from 'react-router'


import TableComponent from '../Components/TableComponent'

import Dialog from '../Components/Dialog'

import Slider from '../Components/Slider'


import Form from '../Components/Form'
import FormInput from '../Components/FormInput'
import FormSelect from '../Components/FormSelect'
import FormCheckbox from '../Components/FormCheckbox'
import FormSearch from '../Components/FormSearch'
import FormButton from '../Components/FormButton'
import FormBox from '../Components/FormBox'

import Tab from '../Components/Tab'
import Tip from '../Components/Tip'

import UploadFile from '../Components/UploadFile'

import Menu from '../Components/Menu1'

import ProvinceCity from '../Components/ProvinceCity'

import TabBox from '../Components/TabBox'

// import DatePicker from 'antd/lib/date-picker';

// import message from 'antd/lib/message';

// import Collapse from 'antd/lib/Collapse';



class Example extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                DialogCon: '',
                DialogCon1: '',
                date: '',
            }
        }

        componentWillMount() {
            this.ajaxData = this.props.store.ajaxData;
            this.ajaxSucceed = this.props.store.ajaxSucceed;
            this.ajaxFailed = this.props.store.ajaxFailed;
            this.updateTodo = this.props.store.updateTodo;
        }


        handleChange(date) {
            message.info('您选择的日期是: ' + date.toString());
            this.setState({
                date
            });
        }


        //改变table数据
        changeData(key, val) {
            //第一次初始化不表格
            var status = 0;
            if (key == 'status') {
                this.setState({
                    status: val
                })
                status = val;
            } else {
                this.setState({
                    status: 0
                });
            }

            var page = 1;
            if (key == 'page') {
                page = val;
            }

            //点击页码时改变的是静态数据，只为演示使用
            this.productList.data.page = page;
            this.updateTodo(this.productList)

            // 其它逻辑判断
            // if ($('#categorySelect').val()) {
            //     var sku_name = '';
            //     var item_id = '';
            //     var searchVal = $('#keyword').val();
            //     if (searchVal) {
            //         if (Number(searchVal)) {
            //             item_id = searchVal;
            //         } else {
            //             sku_name = searchVal;
            //         }
            //     }
            //     this.ajaxData({
            //         url: 'productList',
            //         method: 'post',
            //         body: '{"status":' + status + ',"base_id":"' + localStorage.base_id + '","shop_id":"' + localStorage.shop_id + '","sku_name":"' + sku_name + '","item_id":"' + item_id + '","page":' + page + ',"f_category":' + $('#categorySelect').val() + '}',
            //         succeed: this.ajaxSucceed,
            //         failed: this.ajaxFailed
            //     })
            // } else {
            //     this.productList.ret = 1212; //不渲染
            //     this.updateTodo(this.productList)
            // }

        }


        DialogView() {
                this.setState({
                            DialogCon: < Dialog params = {
                                {
                                    id: 'tip',
                                    title: '产品详情',
                                    width: '800',
                                    height: '600',
                                    button: [{
                                        text: '取消',
                                    }, {
                                        text: '确定',
                                        callback: function() {
                                            alert('223');
                                            this.setState({
                                                DialogCon: ''
                                            });
                                        }.bind(this)
                                    }],
                                    body: 'asfafdsfsdfd',
                                    component: <div>
                                        <div  style={{paddingTop:10,color:'red',fontSize:'18px',marginTop:'70px'}}>嵌套其它组件 form表单</div>
                                        <Form params={this.formConfig1}/>
                                        <div  style={{paddingTop:10,color:'red',fontSize:'18px',marginTop:'70px'}}>定义参考：body定义显示文本、html显示、component显示、button可选</div>
                                    </div>,
                                    closeCallback: function() {
                                        this.setState({
                                            DialogCon: ''
                                        });
                                    }.bind(this)
                                }
                            }
                            />})
                        }

                        DialogView1() {
                            this.setState({
                                    DialogCon1: < Dialog params = {
                                        {
                                            id: 'tip1',
                                            title: '图片幻灯片',
                                            width: '400',
                                            height: '300',
                                            component: < Slider params = {
                                                {
                                                    "id": 'sadfasdf',
                                                    "height": "220px",
                                                    "width": "100%",
                                                    "interval": "2000",
                                                    "images": [{
                                                        title: "pic1",
                                                        active: "y",
                                                        url: "./images/banner_01.jpg"
                                                    }, {
                                                        title: "pic2",
                                                        active: "n",
                                                        url: "http://pic.pp3.cn/uploads//20120702gj/bzimages_20120702_img05.jpg"
                                                    }, {
                                                        title: "pic3",
                                                        active: "n",
                                                        url: "http://img1.3lian.com/2015/a2/249/d/223.jpg"
                                                    }]
                                                }
                                            }
                                            />,
                                            closeCallback: function() {
                                                this.setState({
                                                    DialogCon1: ''
                                                });
                                            }.bind(this)
                                        }
                                    }
                                    />})
                                }

                                getPic(key, val) {
                                    alert("key:" + key + ',val:' + val);
                                }

                                render() {

                                    //表格数据
                                    this.productList = this.props.store.data.FetchData[0].productList;

                                    //form表单实例
                                    var formConfig = [
                                        [{
                                            component: FormCheckbox,
                                            data: {
                                                type: 'checkBox',
                                                id: 'xxx',
                                                name: 'iiii',
                                                disabled: false,
                                                options: [{
                                                    defaultValue: 1,
                                                    text: 'a',
                                                    defaultChecked: false,
                                                }, {
                                                    defaultValue: 2,
                                                    text: 'b',
                                                    defaultChecked: false,
                                                }],

                                                labelText: '名称',
                                                labelW: 1,
                                                width: 2
                                            }
                                        }, {
                                            component: FormCheckbox,
                                            data: {
                                                type: 'radio',
                                                id: 'jj',
                                                name: 'wew',
                                                disabled: false,
                                                options: [{
                                                    defaultValue: 1,
                                                    text: 'a',
                                                    defaultChecked: false,
                                                }, {
                                                    defaultValue: 2,
                                                    text: 'b',
                                                    defaultChecked: false,
                                                }],

                                                labelText: '名称',
                                                labelW: 1,
                                                width: 4
                                            }
                                        }, {
                                            component: FormSearch,
                                            data: {
                                                searchText: '搜1索',
                                                placeholder: '输1入产品ID及sid',
                                                defaultValue: 11111,
                                                id: 'keyword',
                                                name: 'keyword',
                                                width: 2,
                                                callback: function(data) {
                                                    console.log(data)
                                                }
                                            }
                                        }],
                                        [{
                                            component: FormInput,
                                            data: {
                                                type: 'email',
                                                placeholder: '1212121212@163.com',
                                                defaultValue: '22',
                                                id: 'inputEmail3',
                                                disabled: false,
                                                name: '21asas',
                                                labelText: '名称',
                                                labelW: 1,
                                                width: 2
                                            }
                                        }, {
                                            component: FormButton,
                                            data: {
                                                text: '搜索',
                                                width: 2,
                                                callback: function(data) {
                                                    console.log(data)
                                                }
                                            }
                                        }, {
                                            component: FormSelect,
                                            data: {
                                                id: 'selectId',
                                                defaultValue: 22,
                                                name: 'wwwww',
                                                disabled: false,
                                                options: [{
                                                    value: '11',
                                                    text: 'adaf'
                                                }, {
                                                    value: '22',
                                                    text: 'hjgfhj'
                                                }, {
                                                    value: '33',
                                                    text: 'xcvxc'
                                                }, {
                                                    value: '444',
                                                    text: '6767ds'
                                                }],
                                                labelText: '名称',
                                                labelW: 2,
                                                width: 4
                                            }
                                        }]
                                    ];


                                    this.formConfig1 = [
                                        [{
                                            component: FormInput,
                                            data: {
                                                type: 'email',
                                                placeholder: '文本提示',
                                                defaultValue: '',
                                                id: 'inputEmail3',
                                                disabled: false,
                                                name: '21asas',
                                                labelText: '名称',
                                                labelW: 1,
                                                width: 2
                                            }
                                        }, {
                                            component: FormSelect,
                                            data: {
                                                id: 'selectId',
                                                defaultValue: '',
                                                name: 'wwwww',
                                                disabled: false,
                                                options: [{
                                                    value: '11',
                                                    text: 'adaf'
                                                }, {
                                                    value: '22',
                                                    text: 'hjgfhj'
                                                }, {
                                                    value: '33',
                                                    text: 'xcvxc'
                                                }, {
                                                    value: '444',
                                                    text: '6767ds'
                                                }],
                                                width: 2
                                            }
                                        }, {
                                            component: FormSelect,
                                            data: {
                                                id: 'selectId',
                                                defaultValue: '',
                                                name: 'wwwww',
                                                disabled: false,
                                                options: [{
                                                    value: '11',
                                                    text: 'adaf'
                                                }, {
                                                    value: '22',
                                                    text: 'hjgfhj'
                                                }, {
                                                    value: '33',
                                                    text: 'xcvxc'
                                                }, {
                                                    value: '444',
                                                    text: '6767ds'
                                                }],
                                                width: 2
                                            }
                                        }, {
                                            component: FormSearch,
                                            data: {
                                                searchText: '搜1索',
                                                placeholder: '输1入产品ID及sid',
                                                defaultValue: 11111,
                                                id: 'keyword',
                                                name: 'keyword',
                                                width: 3,
                                                callback: function(data) {
                                                    console.log(data)
                                                }
                                            }
                                        }, {
                                            component: FormButton,
                                            data: {
                                                text: '美菜产品库',
                                                width: 2,
                                                callback: function(data) {
                                                    console.log(data)
                                                }
                                            }
                                        }],
                                        [{
                                            component: FormCheckbox,
                                            data: {
                                                type: 'checkBox',
                                                id: 'xxx1',
                                                name: 'iiii1',
                                                disabled: false,
                                                options: [{
                                                    defaultValue: 1,
                                                    text: 'a',
                                                    defaultChecked: false,
                                                }, {
                                                    defaultValue: 2,
                                                    text: 'b',
                                                    defaultChecked: false,
                                                }, {
                                                    defaultValue: 1,
                                                    text: 'a',
                                                    defaultChecked: false,
                                                }, {
                                                    defaultValue: 2,
                                                    text: 'b',
                                                    defaultChecked: false,
                                                }, {
                                                    defaultValue: 1,
                                                    text: 'a',
                                                    defaultChecked: false,
                                                }, {
                                                    defaultValue: 2,
                                                    text: 'b',
                                                    defaultChecked: false,
                                                }],

                                                labelText: '名称',
                                                labelW: 1,
                                                width: 5
                                            }
                                        }]
                                    ];

                                    var params = {
                                        title: {
                                            text: '联系信息',
                                            bright: true
                                        },
                                        description: '从业人员证明（本市人员经营的须提交户籍证明，含户口簿和身份证，以及离退休等各类无业人员的有关证明；',
                                        component: <div><div style={{paddingTop:10,color:'red',fontSize:'18px',marginTop:'70px'}}>formBox框里嵌套其它组件，如表单</div><Form params={formConfig}/></div>
                                    }

                                    var t = this;
                                    var tableOption = {
                                        head: [{
                                            field: 'item_id',
                                            text: '编号1111'
                                        }, {
                                            field: 'class1_name',
                                            text: '一级分类名称'
                                        }, {
                                            field: 'sku_name',
                                            text: '产品名称'
                                        }, {
                                            field: 'own_brand',
                                            text: '品牌12122121'
                                        }, {
                                            field: 'sku_level_name',
                                            text: '等级'
                                        }, {
                                            field: 'sku_format',
                                            text: '规格'
                                        }, {
                                            field: 'valuation_unit_name',
                                            text: '计价单位'
                                        }, {
                                            field: 'status',
                                            text: '状态'
                                        }, {
                                            field: 'handle',
                                            text: '操作',
                                            callback: function(item) {
                                                if (item.status == 9) {
                                                    return (<button type="button" className="btn btn-success">驳回</button>)
                                                } else {
                                                    return (<button type="button" onClick={t.DialogView.bind(t)} className="btn btn-success">查看</button>)
                                                }
                                            }
                                        }],
                                        data: t.productList.data,
                                    }

                                    var obj = {
                                        tabList: ['基本信息11', '合作信息22', '资质信息33'],
                                        getIndex: (index) => {
                                            alert(index)
                                        }
                                    }

                                    var tipOption = {
                                        content: '提示信息提示信息,tip参数配置：宽:220px,left:100px居右,left:-100px居左,left:0、不定义居中',
                                        width: 220,
                                        left: -50
                                    }


                                    var menuConfig1 = {
                                        type: 'V',
                                        style: {
                                            border: 'white',
                                            active: 'green',
                                            navBg: 'purple',
                                            menuBg: 'orange',
                                            width: '100%'
                                        },
                                        id: 'menu1',
                                        data: [{
                                            text: '新鲜蔬菜',
                                            submenu: [{
                                                text: '叶菜类',
                                                submenu: [{
                                                    text: '油麦菜',
                                                    url: '12'
                                                }, {
                                                    text: '散菜花',
                                                    url: '22'
                                                }, {
                                                    text: '油麦菜',
                                                    url: '12'
                                                }, {
                                                    text: '散菜花',
                                                    url: '22'
                                                }, {
                                                    text: '油麦菜',
                                                    url: '12',
                                                }, {
                                                    text: '散菜花',
                                                    url: '22'
                                                }]
                                            }, {
                                                text: '根茎类',
                                                url: '22'
                                            }, {
                                                text: '叶菜类',
                                                submenu: [{
                                                    text: '油麦菜',
                                                    url: '12'
                                                }, {
                                                    text: '散菜花',
                                                    url: '22'
                                                }, {
                                                    text: '油麦菜',
                                                    url: '12'
                                                }, {
                                                    text: '散菜花',
                                                    url: '22'
                                                }, {
                                                    text: '油麦菜',
                                                    url: '12'
                                                }, {
                                                    text: '散菜花',
                                                    url: '22'
                                                }]
                                            }, {
                                                text: '根茎类',
                                                url: '22'
                                            }]
                                        }, {
                                            text: '新鲜蔬菜12',
                                            url: '22',
                                            active: true
                                        }, {
                                            text: '23233',
                                            url: '22'
                                        }, {
                                            text: '232343545',
                                            url: '22'
                                        }, {
                                            text: '新鲜蔬菜',
                                            submenu: [{
                                                text: '叶菜类',
                                                submenu: [{
                                                    text: '油麦菜',
                                                    url: '12'
                                                }, {
                                                    text: '散菜花',
                                                    url: '22'
                                                }, {
                                                    text: '油麦菜',
                                                    url: '12'
                                                }, {
                                                    text: '散菜花',
                                                    url: '22'
                                                }, {
                                                    text: '油麦菜',
                                                    url: '12'
                                                }, {
                                                    text: '散菜花',
                                                    url: '22'
                                                }]
                                            }, {
                                                text: '根茎类',
                                                url: '22'
                                            }]
                                        }, {
                                            text: '新鲜蔬菜',
                                            submenu: [{
                                                text: '叶菜类',
                                                submenu: [{
                                                    text: '油麦菜',
                                                    url: '12'
                                                }, {
                                                    text: '散菜花',
                                                    url: '22'
                                                }, {
                                                    text: '油麦菜',
                                                    url: '12'
                                                }, {
                                                    text: '散菜花',
                                                    url: '22'
                                                }, {
                                                    text: '油麦菜',
                                                    url: '12'
                                                }, {
                                                    text: '散菜花',
                                                    url: '22'
                                                }]
                                            }, {
                                                text: '根茎类',
                                                url: '22'
                                            }]
                                        }, ]
                                    };

                                    var menuConfig2 = {
                                        type: 'H',
                                        style: {
                                            border: '#B1191A',
                                            active: 'green',
                                            navBg: 'purple',
                                            menuBg: '#c81623',
                                            width: '150px'
                                        },
                                        id: 'menu',
                                        data: [{ //数据必须为3级
                                            text: '新鲜蔬菜111',
                                            submenu: [{
                                                text: '叶菜类aaaa',
                                                submenu: [{
                                                    text: '油麦菜bbb',
                                                    url: '12'
                                                }, {
                                                    text: '散菜花ccc',
                                                    url: '22'
                                                }, {
                                                    text: '油麦菜ddd',
                                                    url: '12'
                                                }, {
                                                    text: '散菜花eee',
                                                    url: '22'
                                                }, {
                                                    text: '油麦菜fff',
                                                    url: '12',
                                                }, {
                                                    text: '散菜花111',
                                                    url: '22'
                                                }]
                                            }, {
                                                text: '叶菜类111',
                                                submenu: [{
                                                    text: '油麦菜111',
                                                    url: '12'
                                                }, {
                                                    text: '散菜花111',
                                                    url: '22'
                                                }, {
                                                    text: '油麦菜111',
                                                    url: '12'
                                                }, {
                                                    text: '散菜花111',
                                                    url: '22'
                                                }, {
                                                    text: '油麦菜111',
                                                    url: '12',
                                                }, {
                                                    text: '散菜花111',
                                                    url: '22'
                                                }]
                                            }, {
                                                text: '叶菜类111',
                                                submenu: [{
                                                    text: '油麦菜111',
                                                    url: '12'
                                                }, {
                                                    text: '散菜花111',
                                                    url: '22'
                                                }, {
                                                    text: '油麦菜111',
                                                    url: '12'
                                                }, {
                                                    text: '散菜花111',
                                                    url: '22'
                                                }, {
                                                    text: '油麦菜111',
                                                    url: '12',
                                                }, {
                                                    text: '散菜花111',
                                                    url: '22'
                                                }]
                                            }, {
                                                text: '叶菜类111',
                                                submenu: [{
                                                    text: '油麦菜111',
                                                    url: '12'
                                                }, {
                                                    text: '散菜花111',
                                                    url: '22'
                                                }, {
                                                    text: '油麦菜111',
                                                    url: '12'
                                                }, {
                                                    text: '散菜花111',
                                                    url: '22'
                                                }, {
                                                    text: '油麦菜111',
                                                    url: '12',
                                                }, {
                                                    text: '散菜花111',
                                                    url: '22'
                                                }]
                                            }]
                                        }, {
                                            text: '新鲜蔬菜222',
                                            submenu: [{
                                                text: '叶菜类222',
                                                submenu: [{
                                                    text: '油麦菜222',
                                                    url: '12'
                                                }, {
                                                    text: '散菜花222',
                                                    url: '22'
                                                }, {
                                                    text: '油麦菜222',
                                                    url: '12'
                                                }, {
                                                    text: '散菜花222',
                                                    url: '22'
                                                }, {
                                                    text: '油麦菜222',
                                                    url: '12',
                                                }, {
                                                    text: '散菜花222',
                                                    url: '22'
                                                }]
                                            }]
                                        }, {
                                            text: '新鲜蔬菜333',
                                            submenu: [{
                                                text: '叶菜类333',
                                                submenu: [{
                                                    text: '油麦菜333',
                                                    url: '12'
                                                }, {
                                                    text: '散菜花333',
                                                    url: '22'
                                                }, {
                                                    text: '油麦菜333',
                                                    url: '12'
                                                }, {
                                                    text: '散菜花333',
                                                    url: '22'
                                                }, {
                                                    text: '油麦菜333',
                                                    url: '12',
                                                }, {
                                                    text: '散菜花333',
                                                    url: '22'
                                                }]
                                            }]
                                        }, {
                                            text: '新鲜蔬菜444',
                                            submenu: [{
                                                text: '叶菜类444',
                                                submenu: [{
                                                    text: '油麦菜444',
                                                    url: '12'
                                                }, {
                                                    text: '散菜花444',
                                                    url: '22'
                                                }, {
                                                    text: '油麦菜444',
                                                    url: '12'
                                                }, {
                                                    text: '散菜花444',
                                                    url: '22'
                                                }, {
                                                    text: '油麦菜444',
                                                    url: '12',
                                                }, {
                                                    text: '散菜花444',
                                                    url: '22'
                                                }]
                                            }]
                                        }, {
                                            text: '新鲜蔬菜555',
                                            submenu: [{
                                                text: '叶菜类555',
                                                submenu: [{
                                                    text: '油麦菜555',
                                                    url: '12'
                                                }, {
                                                    text: '散菜花555',
                                                    url: '22'
                                                }, {
                                                    text: '油麦菜555',
                                                    url: '12'
                                                }, {
                                                    text: '散菜花555',
                                                    url: '22'
                                                }, {
                                                    text: '油麦菜555',
                                                    url: '12',
                                                }, {
                                                    text: '散菜花555',
                                                    url: '22'
                                                }]
                                            }]
                                        }, {
                                            text: '新鲜蔬菜666',
                                            submenu: [{
                                                text: '叶菜类666',
                                                submenu: [{
                                                    text: '油麦菜666',
                                                    url: '12'
                                                }, {
                                                    text: '散菜花666',
                                                    url: '22'
                                                }, {
                                                    text: '油麦菜666',
                                                    url: '12'
                                                }, {
                                                    text: '散菜花666',
                                                    url: '22'
                                                }, {
                                                    text: '油麦菜666',
                                                    url: '12',
                                                }, {
                                                    text: '散菜花666',
                                                    url: '22'
                                                }]
                                            }]
                                        }, {
                                            text: '新鲜蔬菜777',
                                            submenu: [{
                                                text: '叶菜类777',
                                                submenu: [{
                                                    text: '油麦菜777',
                                                    url: '12'
                                                }, {
                                                    text: '散菜花777',
                                                    url: '22'
                                                }, {
                                                    text: '油麦菜777',
                                                    url: '12'
                                                }, {
                                                    text: '散菜花777',
                                                    url: '22'
                                                }, {
                                                    text: '油麦菜777',
                                                    url: '12',
                                                }, {
                                                    text: '散菜花777',
                                                    url: '22'
                                                }]
                                            }]
                                        }, {
                                            text: '新鲜蔬菜888',
                                            submenu: [{
                                                text: '叶菜类888',
                                                submenu: [{
                                                    text: '油麦菜888',
                                                    url: '12'
                                                }, {
                                                    text: '散菜花888',
                                                    url: '22'
                                                }, {
                                                    text: '油麦菜888',
                                                    url: '12'
                                                }, {
                                                    text: '散菜花888',
                                                    url: '22'
                                                }, {
                                                    text: '油麦菜888',
                                                    url: '12',
                                                }, {
                                                    text: '散菜花888',
                                                    url: '22'
                                                }]
                                            }]
                                        }, {
                                            text: '新鲜蔬菜888',
                                            submenu: [{
                                                text: '叶菜类888',
                                                submenu: [{
                                                    text: '油麦菜888',
                                                    url: '12'
                                                }, {
                                                    text: '散菜花888',
                                                    url: '22'
                                                }, {
                                                    text: '油麦菜888',
                                                    url: '12'
                                                }, {
                                                    text: '散菜花888',
                                                    url: '22'
                                                }, {
                                                    text: '油麦菜888',
                                                    url: '12',
                                                }, {
                                                    text: '散菜花888',
                                                    url: '22'
                                                }]
                                            }]
                                        }, {
                                            text: '新鲜蔬菜888',
                                            submenu: [{
                                                text: '叶菜类888',
                                                submenu: [{
                                                    text: '油麦菜888',
                                                    url: '12'
                                                }, {
                                                    text: '散菜花888',
                                                    url: '22'
                                                }, {
                                                    text: '油麦菜888',
                                                    url: '12'
                                                }, {
                                                    text: '散菜花888',
                                                    url: '22'
                                                }, {
                                                    text: '油麦菜888',
                                                    url: '12',
                                                }, {
                                                    text: '散菜花888',
                                                    url: '22'
                                                }]
                                            }]
                                        }]
                                    };

                                    var tabBoxConfig = {
                                        id: 'tabId',
                                        tabClass: '', //tab默认样式
                                        tabAction: '', //tab选中样式
                                        tabBox: '', //内容区样式
                                        tab: ['标签1', '标签2', '标签3', '标签4', '', '', '', ''],
                                        data: [
                                            <TabBox1 />,
                                            <TabBox2 />,
                                            <TabBox3 />,
                                            <TabBox4 />
                                        ]
                                    }


                                    // const Panel = Collapse.Panel;

                                    const callback = function(key) {
                                        console.log(key);
                                    }

                                    const text = `
                                      A dog is a type of domesticated animal.
                                      Known for its loyalty and faithfulness,
                                      it can be found as a welcome guest in many households across the world.
                                    `;



                                    return (
                                        <div style={{padding:'10px 100px'}} >
                                        <Link to="/">首页</Link>

                                <div style={{paddingTop:10,color:'red',fontSize:'18px',marginTop:'70px'}}>tab选项卡例</div>
                                <Tab params={obj} />   

                                <div  style={{paddingTop:10,color:'red',fontSize:'18px',marginTop:'70px'}}>input select checkbox radio search ... 例子</div>
                                <div style={{paddingTop:20}}>
                                    <FormInput params={{
                                            type: 'email',
                                            placeholder: '1212121212@163.com',
                                            defaultValue: '22',
                                            id: 'inputEmail3',
                                            disabled: true,
                                            name: '21asas'
                                        }}/>
                                </div>

                                <div style={{paddingTop:20}}>
                                    <FormSelect params={{
                                            id: 'selectId',
                                            defaultValue: '',
                                            name: 'wwwww',
                                            disabled: false,
                                            options: [{
                                                value: '11',
                                                text: 'adaf'
                                            }, {
                                                value: '22',
                                                text: 'hjgfhj'
                                            }, {
                                                value: '33',
                                                text: 'xcvxc'
                                            }, {
                                                value: '444',
                                                text: '6767ds'
                                            }]
                                        }}/>
                                </div>
                                <div style={{paddingTop:20}}>input select checkbox radio search ......</div>

                                <div  style={{paddingTop:10,color:'red',fontSize:'18px',marginTop:'70px'}}>Dialog框 例子  </div>
                                {this.state.DialogCon}
                                <button type="button" onClick={this.DialogView.bind(this)} className="btn btn-success">弹出对话框</button>

                                <div  style={{paddingTop:10,color:'red',fontSize:'18px',marginTop:'70px'}}>form box盒子  嵌套 其它组件（如：表单） 例子  </div>
                                <FormBox params={params} />

                                <div style={{paddingTop:20}}>

                                    <div  style={{paddingTop:10,color:'red',fontSize:'18px',marginTop:'70px'}}>form表单 例子</div>
                                    <Form params={this.formConfig1}/>

                                    <div  style={{paddingTop:10,color:'red',fontSize:'18px',marginTop:'70px'}}>table数据表 例子</div>
                                    <TableComponent params={tableOption} changeData={this.changeData.bind(this)}/>

                                </div>

                                <div  style={{paddingTop:10,color:'red',fontSize:'18px',marginTop:'70px'}}>Tip汽泡提示 例子</div>
                                描述文本<Tip params={tipOption}/>

                                <div  style={{paddingTop:10,color:'red',fontSize:'18px',marginTop:'70px'}}>图片幻灯片 例子</div>
                                < Slider params = {
                                        {
                                          "id":'asfdasdfasdf',
                                          "height": "200px",
                                          "width": "300px",
                                          "interval": "2000",
                                          "images": [{
                                            title: "pic1",
                                            active: "y",
                                            url: "./images/banner_01.jpg"
                                          }, {
                                            title: "pic2",
                                            active: "n",
                                            url: "http://pic.pp3.cn/uploads//20120702gj/bzimages_20120702_img05.jpg"
                                          }, {
                                            title: "pic3",
                                            active: "n",
                                            url: "http://img1.3lian.com/2015/a2/249/d/223.jpg"
                                          }]
                                        }
                                      }
                                      />
                                      {this.state.DialogCon1}
                                <div  style={{color:'red'}}>dialog框里展示 图片幻灯片 例子</div>
                                <button type="button" onClick={this.DialogView1.bind(this)} className="btn btn-success">查看证书幻灯片</button>

                                
                                <div  style={{paddingTop:10,color:'red',fontSize:'18px',marginTop:'70px'}}>UploadFile 例子</div>
                                <UploadFile params={{url:'/webapi/public/uploadpic',key:'pic_1'}}  callback={this.getPic.bind(this)}/>

                                <div  style={{paddingTop:10,color:'red',fontSize:'18px',marginTop:'70px'}}>Menu 例子</div>
                                <div  className='box boxH'>
                                    <div className="flex1">
                                        <div  style={{color:'red'}}>参数：type:'V', 垂直排列</div>
                                        <Menu params={menuConfig1}/>
                                    </div>
                                    <div className="flex4" style={{marginLeft:'40px'}}>
                                        <div  style={{color:'red'}}>参数：type:'H', 水平排列。data必须为三级</div>
                                        <div className="box boxH">
                                            <Menu params={menuConfig2}/>
                                            <div className="flex1"  style={{marginLeft:'30px'}}>
                                                        <div>右侧其它布局</div>
                                                        <div>右侧其它布局</div>
                                                        <div>右侧其它布局</div>
                                                        <div>右侧其它布局</div>
                                                        <div>右侧其它布局</div>
                                                        <div>右侧其它布局</div>
                                                        <div>
                                                            <br />
                                                            <br />
                                                            type: 'H'\'V'<br />
                                                            style: <br />
                                                               &nbsp;&nbsp;&nbsp;&nbsp; border: 'white',<br />
                                                               &nbsp;&nbsp;&nbsp;&nbsp; active: 'green',<br />
                                                               &nbsp;&nbsp;&nbsp;&nbsp; navBg: 'purple',<br />
                                                               &nbsp;&nbsp;&nbsp;&nbsp; menuBg: 'orange',<br />
                                                               &nbsp;&nbsp;&nbsp;&nbsp; width: '100%'<br />
                                                            id: 'menu1',<br />
                                                            data: [ ]<br />
                                                        </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                

                                


                                <div  style={{paddingTop:10,color:'red',fontSize:'18px',marginTop:'70px'}}>box Flex布局 例子</div>
                                <p>css样式：box boxH boxV boxC flex_stretch flex_end flex_start flex1 flex2 flex3 flex4 flex5 flex6</p>
                                <div  style={{color:'red'}}>水平 boxH</div>
                                <div className='box boxH'>
                                    <div className="flex1" style={{backgroundColor:'red'}}>1</div>
                                    <div className="flex2" style={{backgroundColor:'orange'}}>2</div>
                                    <div className="flex3" style={{backgroundColor:'green'}}>3</div>
                                    <div style={{width:'100px',backgroundColor:'yellow'}}>固定100px,其它平分剩余空间</div>
                                </div>
                                <div  style={{color:'red',marginTop:'10px'}}>垂直 boxV</div>
                                <div className='box boxV' style={{height:'300px'}}>
                                    <div className="flex1" style={{backgroundColor:'red'}}>1</div>
                                    <div className="flex2" style={{backgroundColor:'orange'}}>2</div>
                                    <div className="flex3" style={{backgroundColor:'green'}}>3</div>
                                    <div style={{height:'100px',backgroundColor:'yellow'}}>固定100px,其它平分剩余空间</div>
                                </div>
                                <div  style={{color:'red',marginTop:'10px'}}>上下左右居中 boxC</div>
                                <div className='box boxC boxV' style={{height:'100px',backgroundColor:'#d5d5d5'}}>
                                    <div className="flex_start" style={{backgroundColor:'yellow'}}>单独靠前</div>
                                    <div style={{backgroundColor:'yellow'}}>上下左右居中</div>
                                    <div className="flex_end" style={{backgroundColor:'yellow'}}>单独靠后</div>
                                </div>
                                <div className='box boxC boxH' style={{height:'100px',marginTop:'10px',backgroundColor:'#d5d5d5'}}>
                                    <div className="flex_start" style={{backgroundColor:'yellow'}}>单独靠前</div>
                                    <div style={{backgroundColor:'yellow'}}>上下左右居中</div>
                                    <div className="flex_end" style={{backgroundColor:'yellow'}}>单独靠后</div>
                                </div>


                                <div  style={{paddingTop:10,color:'red',fontSize:'18px',marginTop:'70px'}}>日期控件 例子</div>
                                <input type="text" className="form-control" style={{width:'150px'}} defaultValue='2016-01-01' data-provide="datepicker" data-date-format="yyyy-mm-dd"  />

                                <div  style={{paddingTop:10,color:'red',fontSize:'18px',marginTop:'70px'}}>省市区列表 例子</div>
                                <div  style={{color:'red',marginTop:'10px'}}>从后端提取的数据</div>
                                <ProvinceCity 
                                    store={this.props.store} 
                                    params={{
                                      width: 100,
                                      getDataCallback:()=>alert('更新数据的方法')}}/>

                                <div  style={{color:'red',marginTop:'10px'}}>虚拟数据</div>
                                <ProvinceCity 
                                    store={this.props.store} 
                                    params={{
                                      width: 100,
                                      getDataCallback:()=>alert('更新数据的方法')}}/>
                                
                                <div  style={{paddingTop:10,color:'red',fontSize:'18px',marginTop:'70px'}}>tabBox 例子</div>
                                <TabBox params={tabBoxConfig} />


                                



                                <div  style={{paddingTop:10,color:'red',fontSize:'18px',marginTop:'70px'}}></div>

                            </div>
                                    )

                                }
                            }



                            class TabBox1 extends React.Component {
                                render() {
                                    return (
                                        <div>
                                            tabBox params配置：<br /><br />
                                             id: 'tabId',<br />
                                             tabClass: '', tab默认样式<br />
                                             tabAction: '', tab选中样式<br />
                                             tabBox: '', 内容区样式<br />
                                             tab: ['', '','标签1', '标签2', '标签3', '标签4', '', '', '', ''],<br />
                                             data: [组件1，组件2，组件3....]


                                        </div>
                                    )
                                }
                            }

                            class TabBox2 extends React.Component {
                                render() {
                                    return (
                                        <div>Component2<p>222222222</p></div>
                                    )
                                }
                            }

                            class TabBox3 extends React.Component {
                                render() {
                                    return (
                                        <div>Component3<p>3333333</p></div>
                                    )
                                }
                            }

                            class TabBox4 extends React.Component {
                                render() {
                                    return (
                                        <div>Component4<p>444444444</p></div>
                                    )
                                }
                            }



                            module.exports = Example