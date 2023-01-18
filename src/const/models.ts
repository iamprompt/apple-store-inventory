export type IPartNumber = {
  partNumber: string
  productName?: string
}

export type IModel = {
  name: string
  imageKey: string
  partNumbers: Array<IPartNumber>
}

export type ICategory = {
  order: number
  name: string
  models: Record<string, IModel>
}

export type IModels = Record<string, ICategory>

export const models: IModels = {
  iphone: {
    order: 1,
    name: 'iPhone',
    models: {
      'iphone-14-pro-max': {
        name: 'iPhone 14 Pro Max',
        imageKey: 'iphone-14-pro-max-deeppurple-select',
        partNumbers: [
          { partNumber: 'MQAM3ZP/A' },
          { partNumber: 'MQC23ZP/A' },
          { partNumber: 'MQAH3ZP/A' },
          { partNumber: 'MQ9U3ZP/A' },
          { partNumber: 'MQ9W3ZP/A' },
          { partNumber: 'MQC43ZP/A' },
          { partNumber: 'MQ9X3ZP/A' },
          { partNumber: 'MQ9R3ZP/A' },
          { partNumber: 'MQ9P3ZP/A' },
          { partNumber: 'MQC33ZP/A' },
          { partNumber: 'MQC53ZP/A' },
          { partNumber: 'MQAJ3ZP/A' },
          { partNumber: 'MQ9T3ZP/A' },
          { partNumber: 'MQAF3ZP/A' },
          { partNumber: 'MQ9Q3ZP/A' },
          { partNumber: 'MQ9V3ZP/A' },
        ],
      },
      'iphone-14-pro': {
        name: 'iPhone 14 Pro',
        imageKey: 'iphone-14-pro-spaceblack-select',
        partNumbers: [
          {
            partNumber: 'MQ0T3ZP/A',
          },
          {
            partNumber: 'MQ293ZP/A',
          },
          {
            partNumber: 'MQ2N3ZP/A',
          },
          {
            partNumber: 'MQ323ZP/A',
          },
          {
            partNumber: 'MQ023ZP/A',
          },
          {
            partNumber: 'MQ183ZP/A',
          },
          {
            partNumber: 'MQ1M3ZP/A',
          },
          {
            partNumber: 'MQ2V3ZP/A',
          },
          {
            partNumber: 'MPXV3ZP/A',
          },
          {
            partNumber: 'MQ1W3ZP/A',
          },
          {
            partNumber: 'MQ0G3ZP/A',
          },
          {
            partNumber: 'MQ1F3ZP/A',
          },
          {
            partNumber: 'MQ103ZP/A',
          },
          {
            partNumber: 'MQ233ZP/A',
          },
          {
            partNumber: 'MQ083ZP/A',
          },
          {
            partNumber: 'MQ2G3ZP/A',
          },
        ],
      },
      'iphone-14-plus': {
        name: 'iPhone 14 Plus',
        imageKey: 'iphone-14-plus-starlight-select-202209',
        partNumbers: [
          {
            partNumber: 'MQ523ZP/A',
          },
          {
            partNumber: 'MQ5G3ZP/A',
          },
          {
            partNumber: 'MQ573ZP/A',
          },
          {
            partNumber: 'MQ4Y3ZP/A',
          },
          {
            partNumber: 'MQ563ZP/A',
          },
          {
            partNumber: 'MQ5D3ZP/A',
          },
          {
            partNumber: 'MQ593ZP/A',
          },
          {
            partNumber: 'MQ503ZP/A',
          },
          {
            partNumber: 'MQ533ZP/A',
          },
          {
            partNumber: 'MQ5E3ZP/A',
          },
          {
            partNumber: 'MQ513ZP/A',
          },
          {
            partNumber: 'MQ553ZP/A',
          },
          {
            partNumber: 'MQ583ZP/A',
          },
          {
            partNumber: 'MQ5F3ZP/A',
          },
          {
            partNumber: 'MQ4X3ZP/A',
          },
        ],
      },
      'iphone-14': {
        name: 'iPhone 14',
        imageKey: 'iphone-14-midnight-select-202209',
        partNumbers: [
          {
            partNumber: 'MPUR3ZP/A',
          },
          {
            partNumber: 'MPVA3ZP/A',
          },
          {
            partNumber: 'MPWH3ZP/A',
          },
          {
            partNumber: 'MPXG3ZP/A',
          },
          {
            partNumber: 'MPW43ZP/A',
          },
          {
            partNumber: 'MPVN3ZP/A',
          },
          {
            partNumber: 'MPWW3ZP/A',
          },
          {
            partNumber: 'MPVX3ZP/A',
          },
          {
            partNumber: 'MPUF3ZP/A',
          },
          {
            partNumber: 'MPV03ZP/A',
          },
          {
            partNumber: 'MPX33ZP/A',
          },
          {
            partNumber: 'MPWA3ZP/A',
          },
          {
            partNumber: 'MPXN3ZP/A',
          },
          {
            partNumber: 'MPX93ZP/A',
          },
          {
            partNumber: 'MPWP3ZP/A',
          },
        ],
      },
      'iphone-13-mini': {
        name: 'iPhone 13 mini',
        imageKey: 'iphone-13-mini-green-select',
        partNumbers: [
          {
            partNumber: 'MLK23TH/A',
          },
          {
            partNumber: 'MLK33TH/A',
          },
          {
            partNumber: 'MLK13TH/A',
          },
          {
            partNumber: 'MLKD3TH/A',
          },
          {
            partNumber: 'MLK63TH/A',
          },
          {
            partNumber: 'MLK73TH/A',
          },
          {
            partNumber: 'MLKE3TH/A',
          },
          {
            partNumber: 'MLK93TH/A',
          },
          {
            partNumber: 'MLK83TH/A',
          },
          {
            partNumber: 'MLK53TH/A',
          },
          {
            partNumber: 'MLKF3TH/A',
          },
          {
            partNumber: 'MLKC3TH/A',
          },
          {
            partNumber: 'MLKA3TH/A',
          },
          {
            partNumber: 'MLK03TH/A',
          },
          {
            partNumber: 'MLK43TH/A',
          },
          {
            partNumber: 'MNFH3TH/A',
          },
          {
            partNumber: 'MNFF3TH/A',
          },
          {
            partNumber: 'MNFG3TH/A',
          },
        ],
      },
      'iphone-13': {
        name: 'iPhone 13',
        imageKey: 'iphone-13-pink-select-2021',
        partNumbers: [
          {
            partNumber: 'MLPH3TH/A',
          },
          {
            partNumber: 'MLQC3TH/A',
          },
          {
            partNumber: 'MLQF3TH/A',
          },
          {
            partNumber: 'MLQ93TH/A',
          },
          {
            partNumber: 'MLQA3TH/A',
          },
          {
            partNumber: 'MLQD3TH/A',
          },
          {
            partNumber: 'MLPG3TH/A',
          },
          {
            partNumber: 'MLPJ3TH/A',
          },
          {
            partNumber: 'MLQ73TH/A',
          },
          {
            partNumber: 'MLQE3TH/A',
          },
          {
            partNumber: 'MLQ83TH/A',
          },
          {
            partNumber: 'MLPF3TH/A',
          },
          {
            partNumber: 'MLQG3TH/A',
          },
          {
            partNumber: 'MLPK3TH/A',
          },
          {
            partNumber: 'MLQ63TH/A',
          },
          {
            partNumber: 'MNGM3TH/A',
          },
          {
            partNumber: 'MNGK3TH/A',
          },
          {
            partNumber: 'MNGL3TH/A',
          },
        ],
      },
      'iphone-se-3': {
        name: 'iPhone SE',
        imageKey: 'iphone-se-red-select-202203',
        partNumbers: [
          {
            partNumber: 'MMXH3TH/A',
          },
          {
            partNumber: 'MMXJ3TH/A',
          },
          {
            partNumber: 'MMXL3TH/A',
          },
          {
            partNumber: 'MMXF3TH/A',
          },
          {
            partNumber: 'MMXN3TH/A',
          },
          {
            partNumber: 'MMXM3TH/A',
          },
          {
            partNumber: 'MMXK3TH/A',
          },
          {
            partNumber: 'MMXG3TH/A',
          },
          {
            partNumber: 'MMXP3TH/A',
          },
        ],
      },
      'iphone-12': {
        name: 'iPhone 12',
        imageKey: 'iphone-12-white-select-2020',
        partNumbers: [
          {
            partNumber: 'MGJH3TH/A',
          },
          {
            partNumber: 'MGJ83TH/A',
          },
          {
            partNumber: 'MGJK3TH/A',
          },
          {
            partNumber: 'MGJ53TH/A',
          },
          {
            partNumber: 'MGJA3TH/A',
          },
          {
            partNumber: 'MGJC3TH/A',
          },
          {
            partNumber: 'MGJ73TH/A',
          },
          {
            partNumber: 'MGJD3TH/A',
          },
          {
            partNumber: 'MGJ93TH/A',
          },
          {
            partNumber: 'MGJF3TH/A',
          },
          {
            partNumber: 'MGJE3TH/A',
          },
          {
            partNumber: 'MGJG3TH/A',
          },
          {
            partNumber: 'MGJJ3TH/A',
          },
          {
            partNumber: 'MGJL3TH/A',
          },
          {
            partNumber: 'MGJ63TH/A',
          },
          {
            partNumber: 'MJNM3TH/A',
          },
          {
            partNumber: 'MJNP3TH/A',
          },
          {
            partNumber: 'MJNQ3TH/A',
          },
        ],
      },
    },
  },
  ipad: {
    order: 2,
    name: 'iPad',
    models: {
      'ipad-pro-11-gen-4': {
        name: 'iPad Pro 11" 2022',
        imageKey: 'ipad-pro-11-select-wifi-silver-202210',
        partNumbers: [
          {
            partNumber: 'MNXL3TH/A',
          },
          {
            partNumber: 'MNXG3TH/A',
          },
          {
            partNumber: 'MNXN3TH/A',
          },
          {
            partNumber: 'MNXE3TH/A',
          },
          {
            partNumber: 'MNXJ3TH/A',
          },
          {
            partNumber: 'MNXD3TH/A',
          },
          {
            partNumber: 'MNXH3TH/A',
          },
          {
            partNumber: 'MNXM3TH/A',
          },
          {
            partNumber: 'MNXF3TH/A',
          },
          {
            partNumber: 'MNXK3TH/A',
          },
          {
            partNumber: 'MNYH3TH/A',
          },
          {
            partNumber: 'MNYD3TH/A',
          },
          {
            partNumber: 'MNYM3TH/A',
          },
          {
            partNumber: 'MNYF3TH/A',
          },
          {
            partNumber: 'MNYK3TH/A',
          },
          {
            partNumber: 'MNYE3TH/A',
          },
          {
            partNumber: 'MNYC3TH/A',
          },
          {
            partNumber: 'MNYL3TH/A',
          },
          {
            partNumber: 'MNYJ3TH/A',
          },
          {
            partNumber: 'MNYG3TH/A',
          },
        ],
      },
      'ipad-pro-12-9-gen-6': {
        name: 'iPad Pro 12.9" 2022',
        imageKey: 'ipad-pro-13-select-cell-spacegray-202210',
        partNumbers: [
          {
            partNumber: 'MNXW3TH/A',
          },
          {
            partNumber: 'MNXR3TH/A',
          },
          {
            partNumber: 'MNXY3TH/A',
          },
          {
            partNumber: 'MNXP3TH/A',
          },
          {
            partNumber: 'MNXU3TH/A',
          },
          {
            partNumber: 'MNY03TH/A',
          },
          {
            partNumber: 'MNXT3TH/A',
          },
          {
            partNumber: 'MNXX3TH/A',
          },
          {
            partNumber: 'MNXQ3TH/A',
          },
          {
            partNumber: 'MNXV3TH/A',
          },
          {
            partNumber: 'MP243TH/A',
          },
          {
            partNumber: 'MP1X3TH/A',
          },
          {
            partNumber: 'MP263TH/A',
          },
          {
            partNumber: 'MP203TH/A',
          },
          {
            partNumber: 'MP223TH/A',
          },
          {
            partNumber: 'MP1Y3TH/A',
          },
          {
            partNumber: 'MP213TH/A',
          },
          {
            partNumber: 'MP253TH/A',
          },
          {
            partNumber: 'MP273TH/A',
          },
          {
            partNumber: 'MP233TH/A',
          },
        ],
      },
      'ipad-air-gen-5': {
        name: 'iPad Air 2022',
        imageKey: 'ipad-air-select-wifi-purple-202203',
        partNumbers: [
          {
            partNumber: 'MME23TH/A',
          },
          {
            partNumber: 'MME63TH/A',
          },
          {
            partNumber: 'MM9F3TH/A',
          },
          {
            partNumber: 'MM9P3TH/A',
          },
          {
            partNumber: 'MM9M3TH/A',
          },
          {
            partNumber: 'MM9D3TH/A',
          },
          {
            partNumber: 'MM9E3TH/A',
          },
          {
            partNumber: 'MM9N3TH/A',
          },
          {
            partNumber: 'MM9C3TH/A',
          },
          {
            partNumber: 'MM9L3TH/A',
          },
          {
            partNumber: 'MM6U3TH/A',
          },
          {
            partNumber: 'MM733TH/A',
          },
          {
            partNumber: 'MM743TH/A',
          },
          {
            partNumber: 'MM6V3TH/A',
          },
          {
            partNumber: 'MME93TH/A',
          },
          {
            partNumber: 'MMED3TH/A',
          },
          {
            partNumber: 'MM723TH/A',
          },
          {
            partNumber: 'MM6T3TH/A',
          },
          {
            partNumber: 'MM713TH/A',
          },
          {
            partNumber: 'MM6R3TH/A',
          },
        ],
      },
      'ipad-gen-10': {
        name: 'iPad 10th Generation',
        imageKey: 'ipad-2022-hero-yellow-wifi-select',
        partNumbers: [
          {
            partNumber: 'MPQ03TH/A',
          },
          {
            partNumber: 'MPQ83TH/A',
          },
          {
            partNumber: 'MPQC3TH/A',
          },
          {
            partNumber: 'MPQ33TH/A',
          },
          {
            partNumber: 'MPQ23TH/A',
          },
          {
            partNumber: 'MPQA3TH/A',
          },
          {
            partNumber: 'MPQ93TH/A',
          },
          {
            partNumber: 'MPQ13TH/A',
          },
          {
            partNumber: 'MQ6U3TH/A',
          },
          {
            partNumber: 'MQ6K3TH/A',
          },
          {
            partNumber: 'MQ6M3TH/A',
          },
          {
            partNumber: 'MQ6W3TH/A',
          },
          {
            partNumber: 'MQ6T3TH/A',
          },
          {
            partNumber: 'MQ6J3TH/A',
          },
          {
            partNumber: 'MQ6L3TH/A',
          },
          {
            partNumber: 'MQ6V3TH/A',
          },
        ],
      },
      'ipad-gen-9': {
        name: 'iPad 9th Generation',
        imageKey: 'ipad-2021-hero-silver-wifi-select',
        partNumbers: [
          {
            partNumber: 'MK2L3TH/A',
          },
          {
            partNumber: 'MK2P3TH/A',
          },
          {
            partNumber: 'MK2N3TH/A',
          },
          {
            partNumber: 'MK2K3TH/A',
          },
          {
            partNumber: 'MK4H3TH/A',
          },
          {
            partNumber: 'MK493TH/A',
          },
          {
            partNumber: 'MK4E3TH/A',
          },
          {
            partNumber: 'MK473TH/A',
          },
        ],
      },
      'ipad-mini-gen-6': {
        name: 'iPad mini',
        imageKey: 'ipad-mini-select-wifi-starlight-202109',
        partNumbers: [
          { partNumber: 'MK7P3TH/A' },
          { partNumber: 'MK7V3TH/A' },
          { partNumber: 'MK7T3TH/A' },
          { partNumber: 'MK7M3TH/A' },
          { partNumber: 'MLWL3TH/A' },
          { partNumber: 'MLWR3TH/A' },
          { partNumber: 'MK7R3TH/A' },
          { partNumber: 'MK7X3TH/A' },
          { partNumber: 'MLX43TH/A' },
          { partNumber: 'MLX93TH/A' },
          { partNumber: 'MK8H3TH/A' },
          { partNumber: 'MK8C3TH/A' },
          { partNumber: 'MK8E3TH/A' },
          { partNumber: 'MK8K3TH/A' },
          { partNumber: 'MK893TH/A' },
          { partNumber: 'MK8F3TH/A' },
        ],
      },
    },
  },
  'tv-and-home': {
    name: 'TV & Home',
    order: 6,
    models: {
      'apple-tv-4k-2022': {
        name: 'Apple TV 4K (2022)',
        imageKey: 'apple-tv-4k-hero-select-202210',
        partNumbers: [{ partNumber: 'MN873TH/A' }, { partNumber: 'MN893TH/A' }],
      },
    },
  },
  watch: {
    name: 'Apple Watch',
    order: 4,
    models: {
      'apple-watch-ultra': {
        name: 'Apple Watch Ultra',
        imageKey:
          'MQDY3ref_VW_34FR+watch-49-titanium-ultra_VW_34FR_WF_CO+watch-face-49-alpine-ultra_VW_34FR_WF_CO_GEO_TH_LANG_TH',
        partNumbers: [
          {
            partNumber: 'MQFQ3TH/A',
            productName: 'ตัวเรือนไทเทเนียม | สายแบบ Alpine Loop สีสตาร์ไลท์',
          },
          {
            partNumber: 'MQFR3TH/A',
            productName: 'ตัวเรือนไทเทเนียม | สายแบบ Alpine Loop สีสตาร์ไลท์',
          },
          {
            partNumber: 'MQFT3TH/A',
            productName: 'ตัวเรือนไทเทเนียม | สายแบบ Alpine Loop สีสตาร์ไลท์',
          },
          {
            partNumber: 'MNHJ3TH/A',
            productName: 'ตัวเรือนไทเทเนียม | สายแบบ Alpine Loop สีเขียว',
          },
          {
            partNumber: 'MQFN3TH/A',
            productName: 'ตัวเรือนไทเทเนียม | สายแบบ Alpine Loop สีเขียว',
          },
          {
            partNumber: 'MQFP3TH/A',
            productName: 'ตัวเรือนไทเทเนียม | สายแบบ Alpine Loop สีเขียว',
          },
          {
            partNumber: 'MNHH3TH/A',
            productName: 'ตัวเรือนไทเทเนียม | สายแบบ Alpine Loop สีส้ม',
          },
          {
            partNumber: 'MQFL3TH/A',
            productName: 'ตัวเรือนไทเทเนียม | สายแบบ Alpine Loop สีส้ม',
          },
          {
            partNumber: 'MQFM3TH/A',
            productName: 'ตัวเรือนไทเทเนียม | สายแบบ Alpine Loop สีส้ม',
          },
          {
            partNumber: 'MNHK3TH/A',
            productName: 'ตัวเรือนไทเทเนียม | สายแบบ Trail Loop สีเหลือง/เบจ',
          },
          {
            partNumber: 'MQFU3TH/A',
            productName: 'ตัวเรือนไทเทเนียม | สายแบบ Trail Loop สีเหลือง/เบจ',
          },
          {
            partNumber: 'MNHL3TH/A',
            productName: 'ตัวเรือนไทเทเนียม | สายแบบ Trail Loop สีน้ำเงิน/เทา',
          },
          {
            partNumber: 'MQFV3TH/A',
            productName: 'ตัวเรือนไทเทเนียม | สายแบบ Trail Loop สีน้ำเงิน/เทา',
          },
          {
            partNumber: 'MQFW3TH/A',
            productName: 'ตัวเรือนไทเทเนียม | สายแบบ Trail Loop สีดำ/เทา',
          },
          {
            partNumber: 'MQFX3TH/A',
            productName: 'ตัวเรือนไทเทเนียม | สายแบบ Trail Loop สีดำ/เทา',
          },
          {
            partNumber: 'MQFK3TH/A',
            productName: 'ตัวเรือนไทเทเนียม | สายแบบ Ocean Band สีมิดไนท์',
          },
          {
            partNumber: 'MNHF3TH/A',
            productName: 'ตัวเรือนไทเทเนียม | สายแบบ Ocean Band สีขาว',
          },
          {
            partNumber: 'MNHG3TH/A',
            productName: 'ตัวเรือนไทเทเนียม | สายแบบ Ocean Band สีเหลือง',
          },
        ],
      },
    },
  },
  mac: {
    name: 'Mac',
    order: 5,
    models: {
      'macbook-air-m1': {
        name: 'MacBook Air M1',
        imageKey: 'macbook-air-space-gray-select-201810',
        partNumbers: [
          {
            partNumber: 'MGN63TH/A',
            productName:
              'เทาสเปซเกรย์ - โปรเซสเซอร์ ชิพ Apple M1 พร้อม CPU แบบ 8-core และ GPU แบบ 7-core ความเร็ว 256GB',
          },
          {
            partNumber: 'MGND3TH/A',
            productName: 'ทอง - โปรเซสเซอร์ ชิพ Apple M1 พร้อม CPU แบบ 8-core และ GPU แบบ 7-core ความเร็ว 256GB',
          },
          {
            partNumber: 'MGN93TH/A',
            productName: 'เงิน - โปรเซสเซอร์ ชิพ Apple M1 พร้อม CPU แบบ 8-core และ GPU แบบ 7-core ความเร็ว 256GB',
          },
        ],
      },
      'macbook-air-m2': {
        name: 'MacBook Air M2',
        imageKey: 'macbook-air-midnight-select-20220606',
        partNumbers: [
          {
            partNumber: 'MLY33TH/A',
            productName: 'มิดไนท์ - โปรเซสเซอร์ ชิพ Apple M2 พร้อม CPU แบบ 8-core และ GPU แบบ 8-core ความเร็ว 256GB',
          },
          {
            partNumber: 'MLY13TH/A',
            productName: 'สตาร์ไลท์ - โปรเซสเซอร์ ชิพ Apple M2 พร้อม CPU แบบ 8-core และ GPU แบบ 8-core ความเร็ว 256GB',
          },
          {
            partNumber: 'MLXW3TH/A',
            productName:
              'เทาสเปซเกรย์ - โปรเซสเซอร์ ชิพ Apple M2 พร้อม CPU แบบ 8-core และ GPU แบบ 8-core ความเร็ว 256GB',
          },
          {
            partNumber: 'MLXY3TH/A',
            productName: 'เงิน - โปรเซสเซอร์ ชิพ Apple M2 พร้อม CPU แบบ 8-core และ GPU แบบ 8-core ความเร็ว 256GB',
          },
          {
            partNumber: 'MLY43TH/A',
            productName: 'มิดไนท์ - โปรเซสเซอร์ ชิพ Apple M2 พร้อม CPU แบบ 8-core และ GPU แบบ 10-core ความเร็ว 512GB',
          },
          {
            partNumber: 'MLY23TH/A',
            productName: 'สตาร์ไลท์ - โปรเซสเซอร์ ชิพ Apple M2 พร้อม CPU แบบ 8-core และ GPU แบบ 10-core ความเร็ว 512GB',
          },
          {
            partNumber: 'MLXX3TH/A',
            productName:
              'เทาสเปซเกรย์ - โปรเซสเซอร์ ชิพ Apple M2 พร้อม CPU แบบ 8-core และ GPU แบบ 10-core ความเร็ว 512GB',
          },
          {
            partNumber: 'MLY03TH/A',
            productName: 'เงิน - โปรเซสเซอร์ ชิพ Apple M2 พร้อม CPU แบบ 8-core และ GPU แบบ 10-core ความเร็ว 512GB',
          },
        ],
      },
      'macbook-pro-13': {
        name: 'MacBook Pro 13"',
        imageKey: 'mbp-spacegray-select-202206_GEO_TH_LANG_TH',
        partNumbers: [
          {
            partNumber: 'MNEH3TH/A',
            productName:
              'เทาสเปซเกรย์ - โปรเซสเซอร์ ชิพ Apple M2 พร้อม CPU แบบ 8-core และ GPU แบบ 10-core ความเร็ว 256GB',
          },
          {
            partNumber: 'MNEP3TH/A',
            productName: 'เงิน - โปรเซสเซอร์ ชิพ Apple M2 พร้อม CPU แบบ 8-core และ GPU แบบ 10-core ความเร็ว 256GB',
          },
          {
            partNumber: 'MNEJ3TH/A',
            productName:
              'เทาสเปซเกรย์ - โปรเซสเซอร์ ชิพ Apple M2 พร้อม CPU แบบ 8-core และ GPU แบบ 10-core ความเร็ว 512GB',
          },
          {
            partNumber: 'MNEQ3TH/A',
            productName: 'เงิน - โปรเซสเซอร์ ชิพ Apple M2 พร้อม CPU แบบ 8-core และ GPU แบบ 10-core ความเร็ว 512GB',
          },
        ],
      },
      'macbook-pro-14-2023': {
        name: 'MacBook Pro 14" (2023)',
        imageKey: 'mbp14-silver-select-202301',
        partNumbers: [
          {
            partNumber: 'MPHE3TH/A',
            productName: 'เทาสเปซเกรย์ - โปรเซสเซอร์ Apple M2 Pro with 10-Core CPU and 16-Core GPU ความเร็ว 512GB',
          },
          {
            partNumber: 'MPHH3TH/A',
            productName: 'เงิน - โปรเซสเซอร์ Apple M2 Pro with 10-Core CPU and 16-Core GPU ความเร็ว 512GB',
          },
          {
            partNumber: 'MPHF3TH/A',
            productName:
              'เทาสเปซเกรย์ - โปรเซสเซอร์ ชิป Apple M2 Pro พร้อม CPU แบบ 12-core และ GPU แบบ 19-core ความเร็ว 1TB',
          },
          {
            partNumber: 'MPHJ3TH/A',
            productName: 'เงิน - โปรเซสเซอร์ ชิป Apple M2 Pro พร้อม CPU แบบ 12-core และ GPU แบบ 19-core ความเร็ว 1TB',
          },
          {
            partNumber: 'MPHG3TH/A',
            productName:
              'เทาสเปซเกรย์ - โปรเซสเซอร์ ชิป Apple M2 Max พร้อม CPU แบบ 12-core และ GPU แบบ 30-core ความเร็ว 1TB',
          },
          {
            partNumber: 'MPHK3TH/A',
            productName: 'เงิน - โปรเซสเซอร์ ชิป Apple M2 Max พร้อม CPU แบบ 12-core และ GPU แบบ 30-core ความเร็ว 1TB',
          },
        ],
      },
      'macbook-pro-16-2023': {
        name: 'MacBook Pro 16" (2023)',
        imageKey: 'mbp16-spacegray-select-202301',
        partNumbers: [
          {
            partNumber: 'MNW83TH/A',
            productName:
              'เทาสเปซเกรย์ - โปรเซสเซอร์ ชิป Apple M2 Pro พร้อม CPU แบบ 12-core และ GPU แบบ 19-core ความเร็ว 512GB',
          },
          {
            partNumber: 'MNWC3TH/A',
            productName: 'เงิน - โปรเซสเซอร์ ชิป Apple M2 Pro พร้อม CPU แบบ 12-core และ GPU แบบ 19-core ความเร็ว 512GB',
          },
          {
            partNumber: 'MNW93TH/A',
            productName:
              'เทาสเปซเกรย์ - โปรเซสเซอร์ ชิป Apple M2 Pro พร้อม CPU แบบ 12-core และ GPU แบบ 19-core ความเร็ว 1TB',
          },
          {
            partNumber: 'MNWD3TH/A',
            productName: 'เงิน - โปรเซสเซอร์ ชิป Apple M2 Pro พร้อม CPU แบบ 12-core และ GPU แบบ 19-core ความเร็ว 1TB',
          },
          {
            partNumber: 'MNWA3TH/A',
            productName:
              'เทาสเปซเกรย์ - โปรเซสเซอร์ ชิป Apple M2 Max พร้อม CPU แบบ 12-core และ GPU แบบ 30-core ความเร็ว 1TB',
          },
          {
            partNumber: 'MNWE3TH/A',
            productName: 'เงิน - โปรเซสเซอร์ ชิป Apple M2 Max พร้อม CPU แบบ 12-core และ GPU แบบ 30-core ความเร็ว 1TB',
          },
        ],
      },
      'imac-24-': {
        name: 'iMac 24" (2021)',
        imageKey: 'imac-24-blue-selection-hero-202104',
        partNumbers: [
          {
            partNumber: 'MJV93TH/A',
            productName: 'ฟ้า - โปรเซสเซอร์ ชิพ Apple M1 พร้อม CPU แบบ 8-core และ GPU แบบ 7-core ความเร็ว 256GB',
          },
          {
            partNumber: 'MJV83TH/A',
            productName: 'เขียว - โปรเซสเซอร์ ชิพ Apple M1 พร้อม CPU แบบ 8-core และ GPU แบบ 7-core ความเร็ว 256GB',
          },
          {
            partNumber: 'MJVA3TH/A',
            productName: 'ชมพู - โปรเซสเซอร์ ชิพ Apple M1 พร้อม CPU แบบ 8-core และ GPU แบบ 7-core ความเร็ว 256GB',
          },
          {
            partNumber: 'MGTF3TH/A',
            productName: 'เงิน - โปรเซสเซอร์ ชิพ Apple M1 พร้อม CPU แบบ 8-core และ GPU แบบ 7-core ความเร็ว 256GB',
          },
          {
            partNumber: 'MGPK3TH/A',
            productName: 'ฟ้า - โปรเซสเซอร์ ชิพ Apple M1 พร้อม CPU แบบ 8-core และ GPU แบบ 8-core ความเร็ว 256GB',
          },
          {
            partNumber: 'MGPH3TH/A',
            productName: 'เขียว - โปรเซสเซอร์ ชิพ Apple M1 พร้อม CPU แบบ 8-core และ GPU แบบ 8-core ความเร็ว 256GB',
          },
          {
            partNumber: 'MGPM3TH/A',
            productName: 'ชมพู - โปรเซสเซอร์ ชิพ Apple M1 พร้อม CPU แบบ 8-core และ GPU แบบ 8-core ความเร็ว 256GB',
          },
          {
            partNumber: 'MGPC3TH/A',
            productName: 'เงิน - โปรเซสเซอร์ ชิพ Apple M1 พร้อม CPU แบบ 8-core และ GPU แบบ 8-core ความเร็ว 256GB',
          },
          {
            partNumber: 'Z12S',
            productName: 'เหลือง - โปรเซสเซอร์ ชิพ Apple M1 พร้อม CPU แบบ 8-core และ GPU แบบ 8-core ความเร็ว 256GB',
          },
          {
            partNumber: 'Z132',
            productName: 'ส้ม - โปรเซสเซอร์ ชิพ Apple M1 พร้อม CPU แบบ 8-core และ GPU แบบ 8-core ความเร็ว 256GB',
          },
          {
            partNumber: 'Z130',
            productName: 'ม่วง - โปรเซสเซอร์ ชิพ Apple M1 พร้อม CPU แบบ 8-core และ GPU แบบ 8-core ความเร็ว 256GB',
          },
          {
            partNumber: 'MGPL3TH/A',
            productName: 'ฟ้า - โปรเซสเซอร์ ชิพ Apple M1 พร้อม CPU แบบ 8-core และ GPU แบบ 8-core ความเร็ว 512GB',
          },
          {
            partNumber: 'MGPJ3TH/A',
            productName: 'เขียว - โปรเซสเซอร์ ชิพ Apple M1 พร้อม CPU แบบ 8-core และ GPU แบบ 8-core ความเร็ว 512GB',
          },
          {
            partNumber: 'MGPN3TH/A',
            productName: 'ชมพู - โปรเซสเซอร์ ชิพ Apple M1 พร้อม CPU แบบ 8-core และ GPU แบบ 8-core ความเร็ว 512GB',
          },
          {
            partNumber: 'MGPD3TH/A',
            productName: 'เงิน - โปรเซสเซอร์ ชิพ Apple M1 พร้อม CPU แบบ 8-core และ GPU แบบ 8-core ความเร็ว 512GB',
          },
          {
            partNumber: 'Z12T',
            productName: 'เหลือง - โปรเซสเซอร์ ชิพ Apple M1 พร้อม CPU แบบ 8-core และ GPU แบบ 8-core ความเร็ว 512GB',
          },
          {
            partNumber: 'Z133',
            productName: 'ส้ม - โปรเซสเซอร์ ชิพ Apple M1 พร้อม CPU แบบ 8-core และ GPU แบบ 8-core ความเร็ว 512GB',
          },
          {
            partNumber: 'Z131',
            productName: 'ม่วง - โปรเซสเซอร์ ชิพ Apple M1 พร้อม CPU แบบ 8-core และ GPU แบบ 8-core ความเร็ว 512GB',
          },
        ],
      },
      'mac-mini-m2-2023': {
        name: 'Mac mini M2 (2023)',
        imageKey: 'mac-mini-hero-202301',
        partNumbers: [
          {
            partNumber: 'MMFJ3TH/A',
            productName: 'โปรเซสเซอร์ ชิพ Apple M2 พร้อม CPU แบบ 8-core และ GPU แบบ 10-core ความเร็ว 256GB',
          },
          {
            partNumber: 'MMFK3TH/A',
            productName: 'โปรเซสเซอร์ ชิพ Apple M2 พร้อม CPU แบบ 8-core และ GPU แบบ 10-core ความเร็ว 512GB',
          },
          {
            partNumber: 'MNH73TH/A',
            productName: 'โปรเซสเซอร์ Apple M2 Pro with 10-Core CPU and 16-Core GPU ความเร็ว 512GB',
          },
        ],
      },
      'mac-studio': {
        name: 'Mac Studio',
        imageKey: 'mac-studio-select-202203',
        partNumbers: [
          {
            partNumber: 'MJMV3TH/A',
            productName: 'โปรเซสเซอร์ M1 Max CPU แบบ 10-core GPU แบบ 24-core Neural Engine แบบ 16-core ความเร็ว 512GB',
          },
          {
            partNumber: 'MJMW3TH/A',
            productName: 'โปรเซสเซอร์ M1 Ultra CPU แบบ 20-core GPU แบบ 48-core Neural Engine แบบ 32-core ความเร็ว 1TB',
          },
        ],
      },
    },
  },
  accessories: {
    name: 'Accessories',
    order: 99,
    models: {
      airpods: {
        name: 'AirPods',
        imageKey: 'MV7N2',
        partNumbers: [
          { partNumber: 'MV7N2ZA/A' },
          { partNumber: 'MME73ZA/A' },
          { partNumber: 'MPNY3ZA/A' },
          { partNumber: 'MQD83ZA/A' },
          { partNumber: 'MGYJ3ZA/A' },
          { partNumber: 'MGYH3ZA/A' },
          { partNumber: 'MGYL3ZA/A' },
          { partNumber: 'MGYN3ZA/A' },
          { partNumber: 'MGYM3ZA/A' },
        ],
      },
      airtag: {
        name: 'AirTag',
        imageKey: 'airtag-single-select-202104_FV1',
        partNumbers: [
          {
            partNumber: 'MX532TH/A',
            productName: 'AirTag',
          },
          {
            partNumber: 'MX542TH/A',
            productName: 'AirTag แพ็ค 4 ชิ้น',
          },
          {
            partNumber: 'MM073FE/A',
            productName: 'พวงกุญแจหนังสำหรับ AirTag - สีเขียวฟอเรสต์',
          },
          {
            partNumber: 'MX4A2FE/A',
            productName: 'ห่วงคล้องแบบหนังสำหรับ AirTag - สีน้ำตาลอานม้า',
          },
          {
            partNumber: 'MK0W3FE/A',
            productName: 'ห่วงคล้องสำหรับ AirTag - สีเหลืองทานตะวัน',
          },
          {
            partNumber: 'MNG03TH/A',
            productName: 'แท็กกระเป๋าเดินทาง AirTag Hermès - สี Noir',
          },
          {
            partNumber: 'MQDD3TH/A',
            productName: 'เครื่องประดับห้อยกระเป๋า AirTag Hermès - สี Rose Texas',
          },
          {
            partNumber: 'MQDK3TH/A',
            productName: 'พวงกุญแจ AirTag Hermès - สี Maison',
          },
          {
            partNumber: 'HNPX2ZM/A',
            productName: 'Belkin Secure Holder พร้อมสายคล้องสำหรับ AirTag - สีชมพู',
          },
          {
            partNumber: 'HNPU2ZM/A',
            productName: 'Belkin Secure Holder พร้อมพวงกุญแจสำหรับ AirTag - สีน้ำเงิน',
          },
          {
            partNumber: 'HPTT2ZM/A',
            productName: 'เคส OtterBox Rugged สำหรับ AirTag',
          },
          {
            partNumber: 'HPTW2ZM/A',
            productName: 'Incase Woolenex Key Clip สำหรับ AirTag',
          },
          {
            partNumber: 'HPTE2ZM/A',
            productName: 'Belkin Secure Holder พร้อมพวงกุญแจสำหรับ AirTag (4 ชิ้น)',
          },
        ],
      },
      'magsafe-clear-case': {
        name: 'MagSafe Clear Case',
        imageKey: 'MPU73',
        partNumbers: [
          {
            partNumber: 'MPU73FE/A',
            productName: 'เคสใสสำหรับ iPhone 14 Pro Max พร้อม MagSafe',
          },
          {
            partNumber: 'MPU63FE/A',
            productName: 'เคสใสสำหรับ iPhone 14 Pro พร้อม MagSafe',
          },
          {
            partNumber: 'MPU13FE/A',
            productName: 'เคสใสสำหรับ iPhone 14 พร้อม MagSafe',
          },
          {
            partNumber: 'MPU43FE/A',
            productName: 'เคสใสสำหรับ iPhone 14 Plus พร้อม MagSafe',
          },
          {
            partNumber: 'MM2Y3FE/A',
            productName: 'เคสใสสำหรับ iPhone 13 Pro พร้อม MagSafe',
          },
          {
            partNumber: 'MM313FE/A',
            productName: 'เคสใสสำหรับ iPhone 13 Pro Max พร้อม MagSafe',
          },
          {
            partNumber: 'MM2X3FE/A',
            productName: 'เคสใสสำหรับ iPhone 13 พร้อม MagSafe',
          },
          {
            partNumber: 'MM2W3FE/A',
            productName: 'เคสใสสำหรับ iPhone 13 mini พร้อม MagSafe',
          },

          {
            partNumber: 'MHLM3ZA/A',
            productName: 'เคสใสสำหรับ iPhone 12 | iPhone 12 Pro พร้อม MagSafe',
          },

          {
            partNumber: 'MHLN3ZA/A',
            productName: 'เคสใสสำหรับ iPhone 12 Pro Max พร้อม MagSafe',
          },

          {
            partNumber: 'MHLL3ZA/A',
            productName: 'เคสใสสำหรับ iPhone 12 mini พร้อม MagSafe',
          },
        ],
      },
      'magsafe-leather-case': {
        name: 'Magsafe Leather Case',
        imageKey: 'MM193',
        partNumbers: [
          {
            partNumber: 'MM193FE/A',
            productName: 'เคสหนังสำหรับ iPhone 13 Pro พร้อม MagSafe - สีน้ำตาลทอง',
          },
          {
            partNumber: 'MM1Q3FE/A',
            productName: 'เคสหนังสำหรับ iPhone 13 Pro Max พร้อม MagSafe - สีเขียวซีคัวยา',
          },
          {
            partNumber: 'MM143FE/A',
            productName: 'เคสหนังสำหรับ iPhone 13 พร้อม MagSafe - สีเชอรี่เข้ม',
          },
          {
            partNumber: 'MM0H3FE/A',
            productName: 'เคสหนังสำหรับ iPhone 13 mini พร้อม MagSafe - สีม่วงวิสทีเรีย',
          },
          {
            partNumber: 'MPPQ3FE/A',
            productName: 'เคสหนังสำหรับ iPhone 14 Pro Max พร้อม MagSafe - สีน้ำตาลแดงอัมเบอร์',
          },
          {
            partNumber: 'MPPG3FE/A',
            productName: 'เคสหนังสำหรับ iPhone 14 Pro พร้อม MagSafe - สีมิดไนท์',
          },
          {
            partNumber: 'MPP53FE/A',
            productName: 'เคสหนังสำหรับ iPhone 14 พร้อม MagSafe - สีเขียวฟอเรสต์',
          },
          {
            partNumber: 'MPPC3FE/A',
            productName: 'เคสหนังสำหรับ iPhone 14 Plus พร้อม MagSafe - สีม่วงน้ำหมึก',
          },
          {
            partNumber: 'MPPX3FE/A',
            productName: 'เคสหนังแบบกระเป๋าสตางค์สำหรับ iPhone พร้อม MagSafe - สีน้ำตาลแดงอัมเบอร์',
          },
          {
            partNumber: 'MJYR3FE/A',
            productName: 'iPhone 12|เคสหนังสำหรับ 12 Pro พร้อม MagSafe - สีม่วงเข้ม',
          },
          {
            partNumber: 'MHYD3ZA/A',
            productName: 'ซองหนังสำหรับ iPhone 12 | 12 Pro พร้อม MagSafe - สีบอลติกบลู',
          },
          {
            partNumber: 'MHKH3ZA/A',
            productName: 'เคสหนังสำหรับ iPhone 12 Pro Max พร้อม MagSafe - สีส้มแคลิฟอร์เนียป๊อปปี้',
          },
          {
            partNumber: 'MK093FE/A',
            productName: 'ซองหนังสำหรับ iPhone 12 mini พร้อม MagSafe - สีม่วงเข้ม',
          },
          {
            partNumber: 'MHYG3ZA/A',
            productName: 'ซองหนังสำหรับ iPhone 12 Pro Max พร้อม MagSafe - สีน้ำตาลอานม้า',
          },
          {
            partNumber: 'MJYQ3FE/A',
            productName: 'เคสหนังสำหรับ iPhone 12 mini พร้อม MagSafe - สีม่วงเข้ม',
          },
        ],
      },
      'magsafe-silicone-case': {
        name: 'Magsafe Silicone Case',
        imageKey: 'MN5X3',
        partNumbers: [
          {
            partNumber: 'MN653FE/A',
            productName: 'เคสซิลิโคนสำหรับ iPhone 13 Pro พร้อม MagSafe - สีฟ้าควันหมอก',
          },
          {
            partNumber: 'MN6C3FE/A',
            productName: 'เคสซิลิโคนสำหรับ iPhone 13 Pro Max พร้อม MagSafe - สีเขียวยูคาลิปตัส',
          },
          {
            partNumber: 'MN643FE/A',
            productName: 'เคสซิลิโคนสำหรับ iPhone 13 พร้อม MagSafe - สีส้มเนคทารีน',
          },
          {
            partNumber: 'MN5X3FE/A',
            productName: 'เคสซิลิโคนสำหรับ iPhone 13 mini พร้อม MagSafe - สีเหลืองผิวเลมอน',
          },
          {
            partNumber: 'MPTX3FE/A',
            productName: 'เคสซิลิโคนสำหรับ iPhone 14 Pro Max พร้อม MagSafe - สีม่วงเอลเดอร์เบอร์รี่',
          },
          {
            partNumber: 'MPTF3FE/A',
            productName: 'เคสซิลิโคนสำหรับ iPhone 14 Pro พร้อม MagSafe - สีน้ำเงินสตอร์มบลู',
          },
          {
            partNumber: 'MPRY3FE/A',
            productName: 'เคสซิลิโคนสำหรับ iPhone 14 พร้อม MagSafe - สีไลแลค',
          },
          {
            partNumber: 'MPTC3FE/A',
            productName: 'เคสซิลิโคนสำหรับ iPhone 14 Plus พร้อม MagSafe - สีเขียวเอเชเวอเรีย',
          },
          {
            partNumber: 'MKTN3FE/A',
            productName: 'เคสซิลิโคนสำหรับ iPhone 12 mini พร้อม MagSafe - สีส้มอิเล็คทริค',
          },
          {
            partNumber: 'MKTR3FE/A',
            productName: 'เคสซิลิโคนสำหรับ iPhone 12 | 12 Pro พร้อม MagSafe - สีส้มอิเล็คทริค',
          },
          {
            partNumber: 'MKTW3FE/A',
            productName: 'เคสซิลิโคนสำหรับ iPhone 12 Pro Max พร้อม MagSafe - สีเหลืองทานตะวัน',
          },
        ],
      },
      'otterbox-case': {
        name: 'OtterBox Case',
        imageKey: 'HPR32',
        partNumbers: [
          {
            partNumber: 'HQ512ZM/A',
            productName: 'เคส OtterBox Figura Series พร้อม MagSafe สำหรับ iPhone 14 - หลายสี',
          },
          {
            partNumber: 'HQ562ZM/A',
            productName: 'เคส OtterBox Figura Series พร้อม MagSafe สำหรับ iPhone 14 Plus - สีม่วง',
          },
          {
            partNumber: 'HQ5B2ZM/A',
            productName: 'เคส OtterBox Figura Series พร้อม MagSafe สำหรับ iPhone 14 Pro - สีฟ้า',
          },
          {
            partNumber: 'HQ5C2ZM/A',
            productName: 'เคส OtterBox Figura Series พร้อม MagSafe สำหรับ iPhone 14 Pro Max - สีดำ',
          },
          {
            partNumber: 'HQ4L2ZM/A',
            productName: 'OtterBox iPhone 14 Lumen Series พร้อม MagSafe - สีทอง',
          },
          {
            partNumber: 'HQ4P2ZM/A',
            productName: 'OtterBox iPhone 14 Plus Lumen Series พร้อม MagSafe - สีเงิน',
          },
          {
            partNumber: 'HQ4V2ZM/A',
            productName: 'OtterBox iPhone 14 Pro Lumen Series พร้อม MagSafe - สีฟ้า',
          },
          {
            partNumber: 'HQ4W2ZM/A',
            productName: 'OtterBox iPhone 14 Pro Max Lumen Series พร้อม MagSafe - สีดำ',
          },
          {
            partNumber: 'HPR02ZM/A',
            productName: 'เคส OtterBox Aneu Series พร้อม MagSafe สำหรับ iPhone 13 Pro - สีน้ำเงิน',
          },
          {
            partNumber: 'HPR32ZM/A',
            productName: 'เคส OtterBox Aneu Series พร้อม MagSafe สำหรับ iPhone 13 Pro Max - สีดำ',
          },
          {
            partNumber: 'HPQY2ZM/A',
            productName: 'เคส OtterBox Aneu Series พร้อม MagSafe สำหรับ iPhone 13 - สีแดง',
          },
          {
            partNumber: 'HPQT2ZM/A',
            productName: 'เคส OtterBox Aneu Series พร้อม MagSafe สำหรับ iPhone 13 mini - สีฟ้า',
          },
          {
            partNumber: 'HPRH2ZM/A',
            productName: 'เคส OtterBox Figura Series พร้อม MagSafe สำหรับ iPhone 13 Pro - สีดำ/ขาว',
          },
          {
            partNumber: 'HPRQ2ZM/A',
            productName: 'เคส OtterBox Figura Series พร้อม MagSafe สำหรับ iPhone 13 Pro Max - สีบานเย็น',
          },
          {
            partNumber: 'HPRG2ZM/A',
            productName: 'เคส OtterBox Figura Series พร้อม MagSafe สำหรับ iPhone 13 - สีน้ำเงิน',
          },
          {
            partNumber: 'HPR82ZM/A',
            productName: 'เคส OtterBox Figura Series พร้อม MagSafe สำหรับ iPhone 13 mini - สีส้มคอรัล',
          },
          {
            partNumber: 'HPV62ZM/A',
            productName: 'OtterBox iPhone 13 Pro Lumen Series พร้อม MagSafe',
          },
          {
            partNumber: 'HPVB2ZM/A',
            productName: 'OtterBox iPhone 13 Pro Max Lumen Series พร้อม MagSafe',
          },
          {
            partNumber: 'HPV22ZM/A',
            productName: 'OtterBox iPhone 13 Lumen Series with MagSafe',
          },
          {
            partNumber: 'HPUV2ZM/A',
            productName: 'OtterBox iPhone 13 mini Lumen Series with MagSafe',
          },
          {
            partNumber: 'HPX42ZM/A',
            productName: 'เคส OtterBox Core Series พร้อม MagSafe สำหรับ iPhone 13',
          },
          {
            partNumber: 'HPX12ZM/A',
            productName: 'เคส OtterBox Core Series สำหรับ iPhone 13 mini (ใช้ MagSafe ได้)',
          },
          {
            partNumber: 'HPX62ZM/A',
            productName: 'เคส OtterBox Core Series พร้อม MagSafe สำหรับ iPhone 13 Pro',
          },
          {
            partNumber: 'HPX72ZM/A',
            productName: 'เคส OtterBox Core Series พร้อม MagSafe สำหรับ iPhone 13 Pro Max',
          },
        ],
      },
      'magsafe-charger': {
        name: 'Magsafe Charger',
        imageKey: 'MHXH3',
        partNumbers: [
          {
            partNumber: 'MHXH3ZA/A',
            productName: 'ที่ชาร์จ MagSafe',
          },
          {
            partNumber: 'MHXF3ZA/A',
            productName: 'ที่ชาร์จ MagSafe แบบคู่',
          },
          {
            partNumber: 'HPU82J/A',
            productName: 'แผ่นรองชาร์จแบบไร้สาย Belkin BOOST↑CHARGE™ PRO 3-in-1 พร้อม MagSafe',
          },
          {
            partNumber: 'HPBJ2ZM/A',
            productName: 'Belkin Magnetic Car Vent Mount PRO พร้อม MagSafe',
          },
          {
            partNumber: 'HPL72J/A',
            productName: 'แท่นชาร์จไร้สาย Belkin BOOST↑CHARGE™ PRO 2-in-1 พร้อม MagSafe',
          },
          {
            partNumber: 'HPT72ZM/A',
            productName: 'Belkin BOOST↑CHARGE™ PRO Portable Wireless Charger Pad พร้อม MagSafe Special Edition',
          },
          {
            partNumber: 'HPKW2ZM/A',
            productName: 'ที่ชาร์จ Twelve South Forté สำหรับ MagSafe',
          },
          {
            partNumber: 'HPT92ZM/A',
            productName: 'mophie magnetic portable stand ใช้งานได้กับ MagSafe',
          },
          {
            partNumber: 'HPTA2ZM/A',
            productName: 'mophie 3-in-1 travel charger with MagSafe',
          },
          {
            partNumber: 'HQ3F2J/A',
            productName: 'แท่นชาร์จแบบไร้สาย Belkin BOOST↑CHARGE PRO 3-in-1 พร้อม MagSafe',
          },
          {
            partNumber: 'HPP92ZM/A',
            productName: 'ที่ชาร์จ Native Union Rise Dock สำหรับ MagSafe',
          },
          {
            partNumber: 'HPT82ZM/A',
            productName: 'Belkin Magnetic Fitness Mount',
          },
          {
            partNumber: 'MLWJ3ZA/A',
            productName: 'สายชาร์จเร็วแบบแม่เหล็กเป็น USB-C สำหรับ Apple Watch (1 ม.)',
          },
          {
            partNumber: 'MX2E2ZA/A',
            productName: 'สายชาร์จแบบแม่เหล็กสำหรับ Apple Watch (1 ม.)',
          },
          {
            partNumber: 'HPU92ZM/A',
            productName: 'ที่ชาร์จเร็วแบบพกพา Belkin BOOST↑CHARGE™ PRO สำหรับ Apple Watch',
          },
          {
            partNumber: 'HP8K2J/A',
            productName: 'ที่รองชาร์จแบบไร้สาย Belkin BOOST↑CHARGE™ 3-in-1 สำหรับ iPhone + Apple Watch + AirPods',
          },
          {
            partNumber: 'HPPR2ZM/A',
            productName: 'OtterBox Folding Stand สำหรับที่ชาร์จ MagSafe',
          },
          {
            partNumber: 'HN6K2ZM/A',
            productName: 'แท่นชาร์จแบบไร้สาย Belkin BOOST↑CHARGE - Special Edition',
          },
          {
            partNumber: 'HNGW2ZM/A',
            productName: 'แป้นชาร์จหนีบช่องแอร์แบบไร้สาย Scosche MagicGrip Freeflow',
          },
          {
            partNumber: 'HP8Q2J/A',
            productName: 'ที่รองชาร์จแบบไร้สาย Belkin BOOST↑CHARGE™ 7.5W Special Edition',
          },
          {
            partNumber: 'HPUG2TH/A',
            productName: 'แท่นชาร์จ OtterBox 2-in-1 พร้อม MagSafe',
          },
          {
            partNumber: 'HQ342ZM/A',
            productName: 'แท่นวาง mophie 3-in-1 สำหรับที่ชาร์จ MagSafe',
          },
          {
            partNumber: 'HNGY2ZM/A',
            productName: 'ชุดอุปกรณ์ชาร์จ Scosche BaseLynx Modular',
          },
          {
            partNumber: 'HQ6A2ZM/A',
            productName: 'ที่ชาร์จในรถยนต์แบบไร้สาย Belkin BOOST↑CHARGE™ PRO พร้อม MagSafe',
          },
        ],
      },
    },
  },
}
