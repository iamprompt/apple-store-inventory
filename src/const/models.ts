export type IPartNumber = {
  partNumber: string
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
          {
            partNumber: 'MQAM3ZP/A',
          },
          {
            partNumber: 'MQC23ZP/A',
          },
          {
            partNumber: 'MQAH3ZP/A',
          },
          {
            partNumber: 'MQ9U3ZP/A',
          },
          {
            partNumber: 'MQ9W3ZP/A',
          },
          {
            partNumber: 'MQC43ZP/A',
          },
          {
            partNumber: 'MQ9X3ZP/A',
          },
          {
            partNumber: 'MQ9R3ZP/A',
          },
          {
            partNumber: 'MQ9P3ZP/A',
          },
          {
            partNumber: 'MQC33ZP/A',
          },
          {
            partNumber: 'MQC53ZP/A',
          },
          {
            partNumber: 'MQAJ3ZP/A',
          },
          {
            partNumber: 'MQ9T3ZP/A',
          },
          {
            partNumber: 'MQAF3ZP/A',
          },
          {
            partNumber: 'MQ9Q3ZP/A',
          },
          {
            partNumber: 'MQ9V3ZP/A',
          },
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
          {
            partNumber: 'MK7P3TH/A',
          },
          {
            partNumber: 'MK7V3TH/A',
          },
          {
            partNumber: 'MK7T3TH/A',
          },
          {
            partNumber: 'MK7M3TH/A',
          },
          {
            partNumber: 'MLWL3TH/A',
          },
          {
            partNumber: 'MLWR3TH/A',
          },
          {
            partNumber: 'MK7R3TH/A',
          },
          {
            partNumber: 'MK7X3TH/A',
          },
          {
            partNumber: 'MLX43TH/A',
          },
          {
            partNumber: 'MLX93TH/A',
          },
          {
            partNumber: 'MK8H3TH/A',
          },
          {
            partNumber: 'MK8C3TH/A',
          },
          {
            partNumber: 'MK8E3TH/A',
          },
          {
            partNumber: 'MK8K3TH/A',
          },
          {
            partNumber: 'MK893TH/A',
          },
          {
            partNumber: 'MK8F3TH/A',
          },
        ],
      },
    },
  },
}
