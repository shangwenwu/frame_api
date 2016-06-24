import React from 'react'
import {
  Link
} from 'react-router'
import Menu from '../../Components/Menu1'

import Collapse from '../../Components/collapse';
const Panel = Collapse.Panel;

var ReactMarkdown = require('react-markdown');

var source1 = "````\nconst menuConfig1 = {\n  type: 'V',\n  style: {\n    border: 'white',\n    active: 'green',\n    navBg: 'purple',\n    menuBg: 'orange',\n    width: '100%'\n  },\n  id: 'menu1',\n  data: [{\n    text: '新鲜蔬菜',\n    submenu: [{\n      text: '叶菜类',\n      submenu: [{\n        text: '油麦菜',\n        url: 'javascript:void(0)'\n      }, {\n        text: '散菜花',\n        url: 'javascript:void(0)'\n      }, {\n        text: '油麦菜',\n        url: 'javascript:void(0)'\n      }, {\n        text: '散菜花',\n        url: 'javascript:void(0)'\n      }, {\n        text: '油麦菜',\n        url: 'javascript:void(0)',\n      }, {\n        text: '散菜花',\n        url: 'javascript:void(0)'\n      }]\n    }, {\n      text: '根茎类',\n      url: 'javascript:void(0)'\n    }, {\n      text: '叶菜类',\n      submenu: [{\n        text: '油麦菜',\n        url: 'javascript:void(0)'\n      }, {\n        text: '散菜花',\n        url: 'javascript:void(0)'\n      }, {\n        text: '油麦菜',\n        url: 'javascript:void(0)'\n      }, {\n        text: '散菜花',\n        url: 'javascript:void(0)'\n      }, {\n        text: '油麦菜',\n        url: 'javascript:void(0)'\n      }, {\n        text: '散菜花',\n        url: 'javascript:void(0)'\n      }]\n    }, {\n      text: '根茎类',\n      url: 'javascript:void(0)'\n    }]\n  }, {\n    text: '新鲜蔬菜12',\n    url: 'javascript:void(0)',\n    active: true\n  }, {\n    text: '23233',\n    url: 'javascript:void(0)'\n  }, {\n    text: '232343545',\n    url: 'javascript:void(0)'\n  }, {\n    text: '新鲜蔬菜',\n    submenu: [{\n      text: '叶菜类',\n      submenu: [{\n        text: '油麦菜',\n        url: 'javascript:void(0)'\n      }, {\n        text: '散菜花',\n        url: 'javascript:void(0)'\n      }, {\n        text: '油麦菜',\n        url: 'javascript:void(0)'\n      }, {\n        text: '散菜花',\n        url: 'javascript:void(0)'\n      }, {\n        text: '油麦菜',\n        url: 'javascript:void(0)'\n      }, {\n        text: '散菜花',\n        url: 'javascript:void(0)'\n      }]\n    }, {\n      text: '根茎类',\n      url: 'javascript:void(0)'\n    }]\n  }, {\n    text: '新鲜蔬菜',\n    submenu: [{\n      text: '叶菜类',\n      submenu: [{\n        text: '油麦菜',\n        url: 'javascript:void(0)'\n      }, {\n        text: '散菜花',\n        url: 'javascript:void(0)'\n      }, {\n        text: '油麦菜',\n        url: 'javascript:void(0)'\n      }, {\n        text: '散菜花',\n        url: 'javascript:void(0)'\n      }, {\n        text: '油麦菜',\n        url: 'javascript:void(0)'\n      }, {\n        text: '散菜花',\n        url: 'javascript:void(0)'\n      }]\n    }, {\n      text: '根茎类',\n      url: 'javascript:void(0)'\n    }]\n  }, ]\n};\n<Menu params={menuConfig1}/>\n";


var source2 = "````\nconst menuConfig2 = {\n  type: 'H',\n  style: {\n    border: '#B1191A',\n    active: 'green',\n    navBg: 'purple',\n    menuBg: '#c81623',\n    width: '150px'\n  },\n  id: 'menu',\n  data: [{ //数据必须为3级\n    text: '新鲜蔬菜111',\n    submenu: [{\n      text: '叶菜类aaaa',\n      submenu: [{\n        text: '油麦菜bbb',\n        url: 'javascript:void(0)'\n      }, {\n        text: '散菜花ccc',\n        url: 'javascript:void(0)'\n      }, {\n        text: '油麦菜ddd',\n        url: 'javascript:void(0)'\n      }, {\n        text: '散菜花eee',\n        url: 'javascript:void(0)'\n      }, {\n        text: '油麦菜fff',\n        url: 'javascript:void(0)',\n      }, {\n        text: '散菜花111',\n        url: 'javascript:void(0)'\n      }]\n    }, {\n      text: '叶菜类111',\n      submenu: [{\n        text: '油麦菜111',\n        url: 'javascript:void(0)'\n      }, {\n        text: '散菜花111',\n        url: 'javascript:void(0)'\n      }, {\n        text: '油麦菜111',\n        url: 'javascript:void(0)'\n      }, {\n        text: '散菜花111',\n        url: 'javascript:void(0)'\n      }, {\n        text: '油麦菜111',\n        url: 'javascript:void(0)',\n      }, {\n        text: '散菜花111',\n        url: 'javascript:void(0)'\n      }]\n    }, {\n      text: '叶菜类111',\n      submenu: [{\n        text: '油麦菜111',\n        url: 'javascript:void(0)'\n      }, {\n        text: '散菜花111',\n        url: 'javascript:void(0)'\n      }, {\n        text: '油麦菜111',\n        url: 'javascript:void(0)'\n      }, {\n        text: '散菜花111',\n        url: 'javascript:void(0)'\n      }, {\n        text: '油麦菜111',\n        url: 'javascript:void(0)',\n      }, {\n        text: '散菜花111',\n        url: 'javascript:void(0)'\n      }]\n    }, {\n      text: '叶菜类111',\n      submenu: [{\n        text: '油麦菜111',\n        url: 'javascript:void(0)'\n      }, {\n        text: '散菜花111',\n        url: 'javascript:void(0)'\n      }, {\n        text: '油麦菜111',\n        url: 'javascript:void(0)'\n      }, {\n        text: '散菜花111',\n        url: 'javascript:void(0)'\n      }, {\n        text: '油麦菜111',\n        url: 'javascript:void(0)',\n      }, {\n        text: '散菜花111',\n        url: 'javascript:void(0)'\n      }]\n    }]\n  }, {\n    text: '新鲜蔬菜222',\n    submenu: [{\n      text: '叶菜类222',\n      submenu: [{\n        text: '油麦菜222',\n        url: 'javascript:void(0)'\n      }, {\n        text: '散菜花222',\n        url: 'javascript:void(0)'\n      }, {\n        text: '油麦菜222',\n        url: 'javascript:void(0)'\n      }, {\n        text: '散菜花222',\n        url: 'javascript:void(0)'\n      }, {\n        text: '油麦菜222',\n        url: 'javascript:void(0)',\n      }, {\n        text: '散菜花222',\n        url: 'javascript:void(0)'\n      }]\n    }]\n  }, {\n    text: '新鲜蔬菜333',\n    submenu: [{\n      text: '叶菜类333',\n      submenu: [{\n        text: '油麦菜333',\n        url: 'javascript:void(0)'\n      }, {\n        text: '散菜花333',\n        url: 'javascript:void(0)'\n      }, {\n        text: '油麦菜333',\n        url: 'javascript:void(0)'\n      }, {\n        text: '散菜花333',\n        url: 'javascript:void(0)'\n      }, {\n        text: '油麦菜333',\n        url: 'javascript:void(0)',\n      }, {\n        text: '散菜花333',\n        url: 'javascript:void(0)'\n      }]\n    }]\n  }, {\n    text: '新鲜蔬菜444',\n    submenu: [{\n      text: '叶菜类444',\n      submenu: [{\n        text: '油麦菜444',\n        url: 'javascript:void(0)'\n      }, {\n        text: '散菜花444',\n        url: 'javascript:void(0)'\n      }, {\n        text: '油麦菜444',\n        url: 'javascript:void(0)'\n      }, {\n        text: '散菜花444',\n        url: 'javascript:void(0)'\n      }, {\n        text: '油麦菜444',\n        url: 'javascript:void(0)',\n      }, {\n        text: '散菜花444',\n        url: 'javascript:void(0)'\n      }]\n    }]\n  }, {\n    text: '新鲜蔬菜555',\n    submenu: [{\n      text: '叶菜类555',\n      submenu: [{\n        text: '油麦菜555',\n        url: 'javascript:void(0)'\n      }, {\n        text: '散菜花555',\n        url: 'javascript:void(0)'\n      }, {\n        text: '油麦菜555',\n        url: 'javascript:void(0)'\n      }, {\n        text: '散菜花555',\n        url: 'javascript:void(0)'\n      }, {\n        text: '油麦菜555',\n        url: 'javascript:void(0)',\n      }, {\n        text: '散菜花555',\n        url: 'javascript:void(0)'\n      }]\n    }]\n  }, {\n    text: '新鲜蔬菜666',\n    submenu: [{\n      text: '叶菜类666',\n      submenu: [{\n        text: '油麦菜666',\n        url: 'javascript:void(0)'\n      }, {\n        text: '散菜花666',\n        url: 'javascript:void(0)'\n      }, {\n        text: '油麦菜666',\n        url: 'javascript:void(0)'\n      }, {\n        text: '散菜花666',\n        url: 'javascript:void(0)'\n      }, {\n        text: '油麦菜666',\n        url: 'javascript:void(0)',\n      }, {\n        text: '散菜花666',\n        url: 'javascript:void(0)'\n      }]\n    }]\n  }, {\n    text: '新鲜蔬菜777',\n    submenu: [{\n      text: '叶菜类777',\n      submenu: [{\n        text: '油麦菜777',\n        url: 'javascript:void(0)'\n      }, {\n        text: '散菜花777',\n        url: 'javascript:void(0)'\n      }, {\n        text: '油麦菜777',\n        url: 'javascript:void(0)'\n      }, {\n        text: '散菜花777',\n        url: 'javascript:void(0)'\n      }, {\n        text: '油麦菜777',\n        url: 'javascript:void(0)',\n      }, {\n        text: '散菜花777',\n        url: 'javascript:void(0)'\n      }]\n    }]\n  }, {\n    text: '新鲜蔬菜888',\n    submenu: [{\n      text: '叶菜类888',\n      submenu: [{\n        text: '油麦菜888',\n        url: 'javascript:void(0)'\n      }, {\n        text: '散菜花888',\n        url: 'javascript:void(0)'\n      }, {\n        text: '油麦菜888',\n        url: 'javascript:void(0)'\n      }, {\n        text: '散菜花888',\n        url: 'javascript:void(0)'\n      }, {\n        text: '油麦菜888',\n        url: 'javascript:void(0)',\n      }, {\n        text: '散菜花888',\n        url: 'javascript:void(0)'\n      }]\n    }]\n  }, {\n    text: '新鲜蔬菜888',\n    submenu: [{\n      text: '叶菜类888',\n      submenu: [{\n        text: '油麦菜888',\n        url: 'javascript:void(0)'\n      }, {\n        text: '散菜花888',\n        url: 'javascript:void(0)'\n      }, {\n        text: '油麦菜888',\n        url: 'javascript:void(0)'\n      }, {\n        text: '散菜花888',\n        url: 'javascript:void(0)'\n      }, {\n        text: '油麦菜888',\n        url: 'javascript:void(0)',\n      }, {\n        text: '散菜花888',\n        url: 'javascript:void(0)'\n      }]\n    }]\n  }, {\n    text: '新鲜蔬菜888',\n    submenu: [{\n      text: '叶菜类888',\n      submenu: [{\n        text: '油麦菜888',\n        url: 'javascript:void(0)'\n      }, {\n        text: '散菜花888',\n        url: 'javascript:void(0)'\n      }, {\n        text: '油麦菜888',\n        url: 'javascript:void(0)'\n      }, {\n        text: '散菜花888',\n        url: 'javascript:void(0)'\n      }, {\n        text: '油麦菜888',\n        url: 'javascript:void(0)',\n      }, {\n        text: '散菜花888',\n        url: 'javascript:void(0)'\n      }]\n    }]\n  }]\n};\n<Menu params={menuConfig2}/>\n";



const menuConfig1 = {
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
        url: 'javascript:void(0)'
      }, {
        text: '散菜花',
        url: 'javascript:void(0)'
      }, {
        text: '油麦菜',
        url: 'javascript:void(0)'
      }, {
        text: '散菜花',
        url: 'javascript:void(0)'
      }, {
        text: '油麦菜',
        url: 'javascript:void(0)',
      }, {
        text: '散菜花',
        url: 'javascript:void(0)'
      }]
    }, {
      text: '根茎类',
      url: 'javascript:void(0)'
    }, {
      text: '叶菜类',
      submenu: [{
        text: '油麦菜',
        url: 'javascript:void(0)'
      }, {
        text: '散菜花',
        url: 'javascript:void(0)'
      }, {
        text: '油麦菜',
        url: 'javascript:void(0)'
      }, {
        text: '散菜花',
        url: 'javascript:void(0)'
      }, {
        text: '油麦菜',
        url: 'javascript:void(0)'
      }, {
        text: '散菜花',
        url: 'javascript:void(0)'
      }]
    }, {
      text: '根茎类',
      url: 'javascript:void(0)'
    }]
  }, {
    text: '新鲜蔬菜12',
    url: 'javascript:void(0)',
    active: true
  }, {
    text: '23233',
    url: 'javascript:void(0)'
  }, {
    text: '232343545',
    url: 'javascript:void(0)'
  }, {
    text: '新鲜蔬菜',
    submenu: [{
      text: '叶菜类',
      submenu: [{
        text: '油麦菜',
        url: 'javascript:void(0)'
      }, {
        text: '散菜花',
        url: 'javascript:void(0)'
      }, {
        text: '油麦菜',
        url: 'javascript:void(0)'
      }, {
        text: '散菜花',
        url: 'javascript:void(0)'
      }, {
        text: '油麦菜',
        url: 'javascript:void(0)'
      }, {
        text: '散菜花',
        url: 'javascript:void(0)'
      }]
    }, {
      text: '根茎类',
      url: 'javascript:void(0)'
    }]
  }, {
    text: '新鲜蔬菜',
    submenu: [{
      text: '叶菜类',
      submenu: [{
        text: '油麦菜',
        url: 'javascript:void(0)'
      }, {
        text: '散菜花',
        url: 'javascript:void(0)'
      }, {
        text: '油麦菜',
        url: 'javascript:void(0)'
      }, {
        text: '散菜花',
        url: 'javascript:void(0)'
      }, {
        text: '油麦菜',
        url: 'javascript:void(0)'
      }, {
        text: '散菜花',
        url: 'javascript:void(0)'
      }]
    }, {
      text: '根茎类',
      url: 'javascript:void(0)'
    }]
  }, ]
};

const menuConfig2 = {
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
        url: 'javascript:void(0)'
      }, {
        text: '散菜花ccc',
        url: 'javascript:void(0)'
      }, {
        text: '油麦菜ddd',
        url: 'javascript:void(0)'
      }, {
        text: '散菜花eee',
        url: 'javascript:void(0)'
      }, {
        text: '油麦菜fff',
        url: 'javascript:void(0)',
      }, {
        text: '散菜花111',
        url: 'javascript:void(0)'
      }]
    }, {
      text: '叶菜类111',
      submenu: [{
        text: '油麦菜111',
        url: 'javascript:void(0)'
      }, {
        text: '散菜花111',
        url: 'javascript:void(0)'
      }, {
        text: '油麦菜111',
        url: 'javascript:void(0)'
      }, {
        text: '散菜花111',
        url: 'javascript:void(0)'
      }, {
        text: '油麦菜111',
        url: 'javascript:void(0)',
      }, {
        text: '散菜花111',
        url: 'javascript:void(0)'
      }]
    }, {
      text: '叶菜类111',
      submenu: [{
        text: '油麦菜111',
        url: 'javascript:void(0)'
      }, {
        text: '散菜花111',
        url: 'javascript:void(0)'
      }, {
        text: '油麦菜111',
        url: 'javascript:void(0)'
      }, {
        text: '散菜花111',
        url: 'javascript:void(0)'
      }, {
        text: '油麦菜111',
        url: 'javascript:void(0)',
      }, {
        text: '散菜花111',
        url: 'javascript:void(0)'
      }]
    }, {
      text: '叶菜类111',
      submenu: [{
        text: '油麦菜111',
        url: 'javascript:void(0)'
      }, {
        text: '散菜花111',
        url: 'javascript:void(0)'
      }, {
        text: '油麦菜111',
        url: 'javascript:void(0)'
      }, {
        text: '散菜花111',
        url: 'javascript:void(0)'
      }, {
        text: '油麦菜111',
        url: 'javascript:void(0)',
      }, {
        text: '散菜花111',
        url: 'javascript:void(0)'
      }]
    }]
  }, {
    text: '新鲜蔬菜222',
    submenu: [{
      text: '叶菜类222',
      submenu: [{
        text: '油麦菜222',
        url: 'javascript:void(0)'
      }, {
        text: '散菜花222',
        url: 'javascript:void(0)'
      }, {
        text: '油麦菜222',
        url: 'javascript:void(0)'
      }, {
        text: '散菜花222',
        url: 'javascript:void(0)'
      }, {
        text: '油麦菜222',
        url: 'javascript:void(0)',
      }, {
        text: '散菜花222',
        url: 'javascript:void(0)'
      }]
    }]
  }, {
    text: '新鲜蔬菜333',
    submenu: [{
      text: '叶菜类333',
      submenu: [{
        text: '油麦菜333',
        url: 'javascript:void(0)'
      }, {
        text: '散菜花333',
        url: 'javascript:void(0)'
      }, {
        text: '油麦菜333',
        url: 'javascript:void(0)'
      }, {
        text: '散菜花333',
        url: 'javascript:void(0)'
      }, {
        text: '油麦菜333',
        url: 'javascript:void(0)',
      }, {
        text: '散菜花333',
        url: 'javascript:void(0)'
      }]
    }]
  }, {
    text: '新鲜蔬菜444',
    submenu: [{
      text: '叶菜类444',
      submenu: [{
        text: '油麦菜444',
        url: 'javascript:void(0)'
      }, {
        text: '散菜花444',
        url: 'javascript:void(0)'
      }, {
        text: '油麦菜444',
        url: 'javascript:void(0)'
      }, {
        text: '散菜花444',
        url: 'javascript:void(0)'
      }, {
        text: '油麦菜444',
        url: 'javascript:void(0)',
      }, {
        text: '散菜花444',
        url: 'javascript:void(0)'
      }]
    }]
  }, {
    text: '新鲜蔬菜555',
    submenu: [{
      text: '叶菜类555',
      submenu: [{
        text: '油麦菜555',
        url: 'javascript:void(0)'
      }, {
        text: '散菜花555',
        url: 'javascript:void(0)'
      }, {
        text: '油麦菜555',
        url: 'javascript:void(0)'
      }, {
        text: '散菜花555',
        url: 'javascript:void(0)'
      }, {
        text: '油麦菜555',
        url: 'javascript:void(0)',
      }, {
        text: '散菜花555',
        url: 'javascript:void(0)'
      }]
    }]
  }, {
    text: '新鲜蔬菜666',
    submenu: [{
      text: '叶菜类666',
      submenu: [{
        text: '油麦菜666',
        url: 'javascript:void(0)'
      }, {
        text: '散菜花666',
        url: 'javascript:void(0)'
      }, {
        text: '油麦菜666',
        url: 'javascript:void(0)'
      }, {
        text: '散菜花666',
        url: 'javascript:void(0)'
      }, {
        text: '油麦菜666',
        url: 'javascript:void(0)',
      }, {
        text: '散菜花666',
        url: 'javascript:void(0)'
      }]
    }]
  }, {
    text: '新鲜蔬菜777',
    submenu: [{
      text: '叶菜类777',
      submenu: [{
        text: '油麦菜777',
        url: 'javascript:void(0)'
      }, {
        text: '散菜花777',
        url: 'javascript:void(0)'
      }, {
        text: '油麦菜777',
        url: 'javascript:void(0)'
      }, {
        text: '散菜花777',
        url: 'javascript:void(0)'
      }, {
        text: '油麦菜777',
        url: 'javascript:void(0)',
      }, {
        text: '散菜花777',
        url: 'javascript:void(0)'
      }]
    }]
  }, {
    text: '新鲜蔬菜888',
    submenu: [{
      text: '叶菜类888',
      submenu: [{
        text: '油麦菜888',
        url: 'javascript:void(0)'
      }, {
        text: '散菜花888',
        url: 'javascript:void(0)'
      }, {
        text: '油麦菜888',
        url: 'javascript:void(0)'
      }, {
        text: '散菜花888',
        url: 'javascript:void(0)'
      }, {
        text: '油麦菜888',
        url: 'javascript:void(0)',
      }, {
        text: '散菜花888',
        url: 'javascript:void(0)'
      }]
    }]
  }, {
    text: '新鲜蔬菜888',
    submenu: [{
      text: '叶菜类888',
      submenu: [{
        text: '油麦菜888',
        url: 'javascript:void(0)'
      }, {
        text: '散菜花888',
        url: 'javascript:void(0)'
      }, {
        text: '油麦菜888',
        url: 'javascript:void(0)'
      }, {
        text: '散菜花888',
        url: 'javascript:void(0)'
      }, {
        text: '油麦菜888',
        url: 'javascript:void(0)',
      }, {
        text: '散菜花888',
        url: 'javascript:void(0)'
      }]
    }]
  }, {
    text: '新鲜蔬菜888',
    submenu: [{
      text: '叶菜类888',
      submenu: [{
        text: '油麦菜888',
        url: 'javascript:void(0)'
      }, {
        text: '散菜花888',
        url: 'javascript:void(0)'
      }, {
        text: '油麦菜888',
        url: 'javascript:void(0)'
      }, {
        text: '散菜花888',
        url: 'javascript:void(0)'
      }, {
        text: '油麦菜888',
        url: 'javascript:void(0)',
      }, {
        text: '散菜花888',
        url: 'javascript:void(0)'
      }]
    }]
  }]
};


class MenuCom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {}
  componentWillMount() {}
  render() {
    return (
      <div>
          <h1>Menu 菜单</h1>
          <div className="box boxH">
              <div className="flex1">
                  <div className='codeBox'>
                        <div className="box boxH">
                            <div style={{width:'200px'}}>
                                <p>参数：type:'V', 垂直排列</p>
                                <Menu params={menuConfig1}/>
                            </div>
                            <div className="flex1">
                            </div>
                            <div className="flex2">
                                <p>参数：type:'H', 水平排列。data必须为三级</p>
                                <Menu params={menuConfig2}/>
                            </div>
                        </div>
                        <div className="codeView">
                            <Collapse accordion defaultActiveKey={['1']} style={{backgroundColor:'red'}}>
                                <Panel header={'查看代码'} key="1">
                                    <div className="code">

                                       <div className="box boxH">
                                            <div className="flex1" style={{marginRight:'5px'}}>
                                                <p>竖向数据：</p>
                                                <ReactMarkdown source={source1} />
                                            </div>
                                            <div className="flex1" style={{marginLeft:'5px'}}>
                                                <p>横向数据：</p>
                                                <ReactMarkdown source={source2} />
                                            </div>
                                        </div>

                                    </div>
                                </Panel>
                            </Collapse>
                        </div>
                  </div>
              </div>
          </div>

          
      </div>
    );
  }
}

module.exports = MenuCom