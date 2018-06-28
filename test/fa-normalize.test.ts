import FaNormalize from '../src/fa-normalize'
/**
 * test
 */
describe('Test Normalize', () => {
  it('works if all equal', () => {
    expect(FaNormalize('سجاد')).toEqual('ﺩﺎﺠﺳ')
    expect(FaNormalize('سلام')).toEqual('ﻡﻼﺳ')
    expect(FaNormalize('سؤال', false)).toEqual('ﺳﻮٔﺍﻝ')
    expect(FaNormalize('قرآن کریم', false)).toEqual('ﻗﺮﺁﻥ ﮐﺮﯾﻢ')
    expect(FaNormalize('الله', false)).toEqual('ﺍﻟﻠﻪ')
    expect(FaNormalize('سَلامُ سجاد خوبی ولاغیر', false)).toEqual('ﺳَﻻﻡُ ﺳﺠﺎﺩ ﺧﻮﺑﯽ ﻭﻻﻏﯿﺮ')
    expect(FaNormalize('والسلام', false)).toEqual('ﻭﺍﻟﺴﻼﻡ')
    expect(FaNormalize('والسلآم', false)).toEqual('ﻭﺍﻟﺴﻶﻡ')
    expect(FaNormalize('والسلإم', false)).toEqual('ﻭﺍﻟﺴﻺﻡ')
    expect(FaNormalize('والسلأم', false)).toEqual('ﻭﺍﻟﺴﻸﻡ')
    expect(FaNormalize('لأم', false)).toEqual('ﻷﻡ')
    expect(FaNormalize('لإم', false)).toEqual('ﻹﻡ')
    expect(FaNormalize('لآم', false)).toEqual('ﻵﻡ')
    expect(FaNormalize('لام', false)).toEqual('ﻻﻡ')
  })
})
