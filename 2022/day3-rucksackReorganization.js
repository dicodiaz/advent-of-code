const input = [
  'mjpsHcssDzLTzMsz',
  'tFhbtClRVtbhRCGBFntNTrLhqrwqWMDMTWTqMq',
  'LltbngLGRSBgSgGRCJdSdQHvdfmQccmjSQ',
  'lBslsZDDWdGdGpSMts',
  'grQhDvqLQHDNGJJtbRMQQJ',
  'HChCTnnLCgCrTZPPFzzVPcVD',
  'ShrzjhNGrNqrhWnHHfVHbhnHbbhH',
  'RBsvcBcDCdsRTsvgCgcPFRQpVQGQJPVFbnJfbJ',
  'DvsTsdlCBsGLrjzmlqqz',
  'WJJqZTgCnBLGCZBJCJnTLggTDDSDDMNdDSdbdSSsWDFfMsFf',
  'PVjqpVHmPpvmcjhrRprFmQQffbfNbQMMsSMQNQ',
  'cwcpRvrVlVgwtBwZqBzZ',
  'qfJJmpqpmhsggvvpVPZCrhdFLFzZFDdLLh',
  'CtCTBctGcGLSzZddGZSW',
  'RlNjBCnjttBHHMMcQHCsRfsbfwgggmmJvmgfpm',
  'ZmcgBBZhZMsnqnCPjpHPjLHp',
  'dGbNwNtlTMTzGfNvTvdwNGVLPpQHPjLQPCpCjPqjLbpLPR',
  'dvDTdfvNBhDZMBDZ',
  'cvvRvbqcllbBVlvVVbVVlbVDjRjDjdMsHPZPGdDPGPHrDP',
  'FwtpfwJtWwNtTTNnwFCtjDJsQdQPPPPMrjrPJHjH',
  'CwFpnppgntShgbsscbms',
  'cWMFMQpFNcvNDdBDgdsT',
  'MPrrfrCHBBsDZCBJ',
  'LmLjMLjjLWpVcRVR',
  'ZrRZqlZMqTWrMDqwvnvVtnsvddvVnlVf',
  'pQNhhLNNGmLjhhcfvndDpffdfdVf',
  'QGjCLCQGmNgPBQDFFgTMJWWwMRTrTZWWBWTr',
  'WrZWZPHHWZHprZVmVvqddBttBBhGhtvh',
  'gzDlMTJDMfqhBGllhl',
  'jJLqMMDDbbqjLpPHcsHLWZspPr',
  'bsSVRVGsrDstrrSjcQjcjlPwzjQl',
  'gHBggFNTTvTgfqgCFzljWwLWQQQnrwQWnf',
  'NvJHgpgHvqBhNBJhHTvpBCJCZmtdpDsGsZdZMZRbVbbMdrZs',
  'MPPtPwPnRnMPPnwrtNSGgLSCGGGNSLtSgD',
  'hBhWFjfCsTbbbWqFFWBBqBhsWZVGSVglZHLSVDlNWDNHHGgV',
  'zsCfTsTCMdmRPwzQ',
  'JVQVvvszzvTsVsVJjctppcCtjtPRcTlP',
  'MdFgqSddMqMDbtDlNjRDSR',
  'qFZWZqwHlZfZvzvZfLZn',
  'vpqwQSsHSHDQzDpgzwZlRLRZRRZTnTrrvGhh',
  'JBcdmbmFMPgPbgfrZRZnRFFnrnLRln',
  'JNdBNgbdJmPMWSSDzwVDtwSWWW',
  'BDMcDDppHCStpWcHBDNtzPJjqGlllPMJzPGjwjlq',
  'CZdZLmgCdqbPzjblZj',
  'vndLfnghRQmVrhdvgBHpSCDWHBBCVHNppD',
  'WrhrJJGSWzpTWwts',
  'VlLPmqgmRNZRGwsvttjgcwsT',
  'PDZmlbdVqLmPlddVNRDmmmbbSFHrCFQCnFBFJHSJGrDQCBrr',
  'hvPdpvhHvHvPrNfVhDfjggFfRV',
  'zlGwJGslsSDRfjsg',
  'MJMWjMJzwqWGzJwMqJBTCmHndPPdCBvmdCpmHn',
  'PVWFpQhJhFJpGbRCvRHGCp',
  'jgslDjftsqhNglTgllgTqMnlHwCcvwZwRccSRCbGSGbCMHRw',
  'TgjhNNnjlTfjTdDqTfhjnmzmWPzWrLdrQBPJFWJWBB',
  'qPPRMPlfSzSSSPPnnLnqMlpQQtrrtmWpbFtQrdzrtrWt',
  'BBvCcwsVThsBgswDBCFQHQpdmQvtrFpWFvWp',
  'gCghTJgVCgDGVMlRGMqZnSWqlM',
  'RWbHvrbHBsbWBHJWvJwMtmdZwdtmdvwMZQff',
  'DRVjcqhRchhGGllhCgdGQQzfttzGQGwQfg',
  'cDRljchpqTcjDFTFVcPcPCWBHpNnJNNSnbWbHHrSpWHr',
  'dtHrRrBHrCRhddftjgBrRhgjsbbbMpbSWSTjWcsDTWDbcW',
  'GQPFVQVQnJlqVMDcMzpDfzpDVD',
  'qZZJFLlLnvFFGPGLPqnJvwQldfgHrBRBmBhgNBRHghNhhwRg',
  'rLbrZhPgqZhMdVFSFTSGCqFG',
  'zsszfRzjtHtzvRTSDdFFCtdDdtND',
  'fcwllfmwzRHlfmmzFvQQLrgLMLBZhJQZPrZhJLhW',
  'sllrCfpQQJpMHLgzwDwpNqzzVDpV',
  'RZPFZPGcSMFtGPRGMwNDVwdRgzvNwgqNvg',
  'hBmbMcBmcThmcGtSFTZfQCJjrHLJfsjhWJssJl',
  'DqGCbGfCRhfZCVbbqDJJGJBgRNpNdpBNNgNBBNwHnRgt',
  'rcWSsSSPSQtwBwHD',
  'MLscLMzvvTvcTLzvWWFDPTTrGqmFGGqCZJGbblbVbVZZVmFJ',
  'FprpsLQTrstQHNmVSVml',
  'JMggWPggWcRbwgJPCGMcGcfmzHlMNSjfzVNhHfVtzSMz',
  'cwnPnBwgnGRgRCgRbWJLpFsLtFBLFrDLFZZDrL',
  'lVgjLLLMgFMDCwCFqCRbngsvnGSvnSGndbsfgf',
  'WZJcTWcNTmJZphmTJJNQHcdvfdbvnRRGbGthdrbttfSv',
  'ZPQTJTpTNPJNQTmJRBZJNBHjwMVwPCMwVlVzjwwzqqjVjL',
  'hznNhNQNQFDWVFmDQm',
  'SMqZBMMbBvDbHPzzdVPH',
  'zzzTBTMLNTgpnTTh',
  'NLCdmsdCVLGHCHdQzzmznnFwRjFMDMwpTBjDRpnpTBMJ',
  'PrcfcrglcfWbSqgrlqvShrwpJpDBFJHpBWjTDTRTRTTB',
  'crSgSHtPttfdLGmtzzZNNV',
  'BTlTVqCBqtTcBqVhWlsJjDvsnLsvlvpJPj',
  'gMgggGZbSMzNRRRLmZZnQZQPPDvnsnDvJwwQ',
  'dMRRmMgbNfRgmfSdGFgNgTBtrhrhqfWtLCCWLTWWHc',
  'zcfVrPwnwrPmrvnjdFdBbHFFdd',
  'CCqpSSQQpQZLDCSHPpBFvFBjTHRvRR',
  'DMLGthLZMLtQGhGNMPqGSDflzfwcVmzJzsfgNVrswcrr',
  'hSgvMTQvChSqPvhTrRLlVHJgfgRJlHHHJH',
  'jmzsZzZzwmmLGGtwtVJWNNDRDtVcfVRl',
  'GnBBLbzzzFszBFpzvSdrQQCTCQbhMvSQ',
  'VHpTMrZMMbDbbpTZmQmTnmzhTqjqlWWQ',
  'GGvgNsvNCNvvGvlqqdzWZmlsmZqZ',
  'wNNNgccNGJSNBSRNBNvNcvJHLDDZMFRMppMLrfHDLbrrHF',
  'spssbPMLpPllspGNsNWMrnwddnfcqrnwwwwMwM',
  'VmQBFCjzzjmfnwbrngcVrd',
  'FQbSFjBvvzsWvWGlvWNl',
  'JLFSwfwRLLfGhnQJBQshvn',
  'pZgNcpCWpWtcvhjGGjtVvszD',
  'CccMcPcgTTCWmcZcWMcmTNZPmHdrqSHFRRrqwrSrRqwrHmsH',
  'BPMhflJRhqnPNGjNRNRjgSRm',
  'VdVsDswTVZbCwCZBrcDCczTwtjtNNjmjmgpmjpQggpGVSgQm',
  'sTbWrsTBbrTPPnqlJnPPhW',
  'nvrgjMWBvQWPvQnsZfGcZcRFdGFtdtZB',
  'bHVDwmqNNDhHNzqpphLNHVLpSJcdZtfffRZdDgRFGSddcRZt',
  'HNLNqNqLNbhqVVbClngjnQWPTWgsCgvT',
  'tfstpcScscBTFTpFnsWSmgdzJlgmgBmPPzJmvdPm',
  'jnrqrLHRwGrwhdPvvPvhjJmP',
  'qqCLRCGrZZqCHRVtVWQptFWppnbcWb',
  'wCDJZJgDwHpdqHhdGHBhhH',
  'WSPmJMlmbSmztQlQsvPhnhGGdBddBqdGddTbVB',
  'WzWQftWMSWtmvmmSWtMQPgggpZwLwZjggJFgrpFCfj',
  'MvQBJMBQhjQFNFnjnj',
  'dtlZmRtLmjSTSLLtTtNVwWzDRzDVwwWFwnNn',
  'dmmLCqTdcLqtLGqjBhpfHqBGpv',
  'PBPRhjTPPlLRBvlvfwffqJGfpG',
  'rHtMtrszFtSgbFrrggrFgMnwWGzmQqWvGWzGQpJGfNqqNz',
  'FggcbSMntVgMdRCwZcjChLCT',
  'lCqqBlCwlnDqPZTZZBLNdjJLwttNWjjdzJzc',
  'fVfMbvbvmbVsmSsmMVWNtzzcjgLWgjztMMtg',
  'VVmFhFRSfbQsvVQmvSfhSsmzHlCZqrrBrDBrHZPRTZnnzB',
  'CRrDWmzRRQMmDqrrBgBQmtHljhHwtwlwplcBjHGwwB',
  'PWfPSWnvsNZSZdfjHjZtGHjchllltl',
  'WVsnbSPTbNdbmqTQmmrmLzTq',
  'cGtMBGSJDgtgMBsBMgMvWWSHWjpjzHTWTPpqWzqW',
  'mNVQNsdVsdhLmCpTWWjmCjTT',
  'NQQwrfbQrNQNbrrdLwfQsZdgFbBBFBgggRGRDMRFFMRDgM',
  'lFnqgqWQvHWqgvlVglvqjPjcLdfLfBPLnrbLNLcN',
  'hmTmthppsRtpTRRTZMpSbLdNjNcJLcrcBNbJBZZc',
  'smmpRsTtpSSsRGhppmmhdCMGWwqFQgWGWWDgWwVFHQqHgg',
  'mWFjmcdcFWcSSQjzrpvrwRGvTwQGGG',
  'HRJfgMZVhtRlHJHBVJTGvGppbpbvvGTvTtrv',
  'glsgVMVqffdnPRDcqLnL',
  'MtvLJdmLLTvSSCtSzLSTcDhRjRftQjjssshfQNjPtf',
  'nlggrFWzRsfFjVQN',
  'WgwwBgbgZBHGBnccTzMCLTZJmLLL',
  'sRtHTBBHZtDTtZhdPzWdGcdVFdJmGcnm',
  'wpwMLWCgvfNvwvwbbCrwgfzPncrJPSFVGPnrcJSVznmV',
  'bLpvwQwMwpjWMgfvgZTsDsBttqHRjTqHlH',
  'mpmGpCpmlpmwfmCQVppCVfQSSjvSqgWvvvDgNwWDgnnDnW',
  'RBLsHRJBRrHJWFDWSNqFWj',
  'zZBLdsdcZrsBjGfpGVpTTPGlVc',
  'NBbTzgwSNmrFWpVrzrFM',
  'LnZQtQlZVnMrFBBG',
  'CCdtddBtPdNqcvHSCCcg',
  'ZFbZPHbZPTQVVlsGNF',
  'qtvDWvgRftqGNccCNVThDs',
  'fRwGBBjBppdMdBMZ',
  'GffflsZsPZVfjsssNfZsJNNZVcMDSqMWFcwFMMpcTMTTFSTS',
  'LhrCmvzcRbbhtmRdTCMDwWMpDWqqqMpW',
  'dvRQmBBvLzBRRvRhhcdbhdRgjHQNllJsfsNlZZljZGGNQN',
  'wjbMPsbfLzVCTMVbjLplmpshhSpHShhJhtsm',
  'ZrcqZTDTGDqFdJtGmdGSpl',
  'QNNrWvQRqRNWnTQRvqjPbjfWbCBCMbMLBwMV',
  'wRPRsppFfWJRlPRPFlpJfwSMzzZTBwBtZTTCMCMtdz',
  'vGLGrjcfrLVGjfnGTMCMtNNnCTnMtCBd',
  'VrjqhjhLVcrGVRqJmqQspmfFWm',
  'LRfdnmwMwdSBmfvJNrrgLhCNgqqJWs',
  'llctPPVTcPStgJgshCsrCs',
  'DpTlFpFVRFZRFFSv',
  'sPgRgsmdcqmgSvvFRRRRdqdFfTWZhhdZrZbbWfTpwDfbWTbw',
  'jLCCHtLljJzjlplfZSlwTfprZZ',
  'tBHVjQHzHQJBtSVmvRsvvFRqnGgv',
  'spppVDbVcbgVSFgFZZbGZgbJMRBTvHTvJJHGtHRwtMGvHT',
  'LldflzQLLQmQWQQfnwMWwHJtTtwRBcBt',
  'CPjfhCmNmNfFVchpchFVhp',
  'bZQJgQmQmTgnLBRtNPNnml',
  'ccszcqldGzhszrVsqdlHVNwLpppwHPHRtBBppDNRLt',
  'VSzVhVdcfrrhcqGrVhrssQQlMbJvFjMgbFSQggCvCv',
  'hHWVWhhlZDZVWNTgczWLjbtcTFFj',
  'JJnPnCdBCBnnRCjSsjStBgsbFttb',
  'MRpgCpGqdPRppJwpnRqRfZZhmvhHDrhllDHhhZGZ',
  'SPcgLDcLLnWFWCNVCRPT',
  'fhZQtsbtmbmfZTVTVRWfNvTCTT',
  'jhbbmzRsQzpLDcgLHLjg',
  'GSFRHrCCGRJDJtrgWdrL',
  'stcVQshQZBsBmjMsZhmMQQWDDvNWdncNWvzLgdDnzdDN',
  'sVwMBQBhVVjtQZVPlSfPCfwRpSCpRl',
  'bBHHJMJvBvWMJWqqccNNPhMCrclChQCC',
  'RPppPgfpwgmcQgrhmm',
  'tfwTwpFPGGwZSRtpVjJHbHLvSvLSqVLL',
  'jlJfZGjljJPBqJGnfGVMqGfrFWWddvDmFRDcmdFDdDvbDM',
  'hTCTsgsgwhTbvRdcFmsddpFd',
  'wbQNHTQLgCwSThhCgwnZnJfqnqJBlNlBnnVl',
  'CLlfbjjbLlbbDGbLzfCGhdtdWBthdBWsHvWHBnntWs',
  'rmJRJFqrDwVFTwFmSJvtvMtdJMMHBdBBndWt',
  'ZVrVVZpgTpZFSqmZqRNlNNfQQbpGjDQbbpPl',
  'mVCrhGHGmZhrNlDwbWnLWWvGLWWwnd',
  'PNsqgzspsgNFJNFfzqpWSWdwSvSPnvdWbSbvjd',
  'NzgJzqMcgscQqJcpJRzBmlrBRBDDlHZBBBHtHZ',
  'NJmNJDwcMmJNMbJJDNDqcGcsWRWHQzRPQjZLRGZWLQsjZQ',
  'dgSnTBgdpddtgShSTZjLRhRLHqWPPhPRPQ',
  'VgdTpBntlvBVrlfcbqJcMrfmcqmb',
  'wvqwvPwNJgFmLdvDJFDmDLvJlQZpMzSpBVflpdSSMlQnfldS',
  'WjCcRZCWRjjRtsZhRRhpSVBVnzplBfWnfBfSQz',
  'CbRbcsjHZrhbTRtsGbCrgNgDDPFFqvvJvJFDFw',
  'GlsCrbCChShqgqlbSCcVbqgVhBwjBDFBhBhdDWvwBFFvWvDv',
  'THmHMmtMnLfHRnzRZnfLBDWWsWzWFNsvWjjvjvFF',
  'mpHRtmZffHTTMpmLMLLnJtJCgScScsPlblcpCrPbblCPlq',
  'vscDLrcvrsLNStdTfBCvgJTqGBdd',
  'bwLbzRhbbdTfbgCB',
  'pplQzLwmPZVMStcDjFtQrS',
  'RMjCrhFJhRVRVCCFFsvmnvqrmbvqmqSmbrvm',
  'tzfpBgTHzttGzZpBfHGDBZHbccnGqbmvdNlGnSnlcvSwbn',
  'pDWTHDTzgTfWZpVVsWSPjRFSMsFs',
  'fmrfmrwVfjmrzjqCsqqvjsvvpG',
  'hFDVtFStVtJnPPtJNHbtQWGbQsCvCsQgpWGggdQC',
  'NBSDSNHStHNHnhStHNNrcflrmTzBlwmzrlMVVw',
  'SjtZZSdNcDldPQqndl',
  'BbgzgWgTmTBfwrbnDjQDwVPwDlnsVq',
  'zBBrCTTMBWLMWmfMfbbmrMtjNZLFJRRZSSvFFtStvGGJ',
  'CTCGLGCFRRSMGnZnLCTfdffhpbNbDfpdZBvhdv',
  'rJlqclVPHJWVrgPPQqjqgJlhBhDBBQdvbhwvNfhswfNpvb',
  'tltrcrHjlVWVCDzSGCCzLCGt',
  'sbHHsbCCHbLSVfJbbfSLNJBzvzMMPrhPPNztZlZNZhdt',
  'GTWjplTgDnGmQGpQnQhZrvvBMPztPzvrzvjZ',
  'mQgGWllcFcTFmgwcDppDQGTCqfsSLqsfSbqJqLSSFsbRfF',
  'jslsFjLLLLvFwWtQFTFDJQWp',
  'dGzdrNmRWqVBGcTbwpRDRnbJDRhT',
  'qzqzrrPNNrmfLPsjglHjgW',
  'QjCHcPfcgQSgPPcffQSmmmLmrJJpNpBMrJMtFrBBBMFrrpNS',
  'VGVZfDbbVVZWGvDbFrlBZNJBNlNMwwtM',
  'sbvfhqTGTRnhTVGvzgHmgQLQmPqzmPLm',
  'sLwnMHnbnLMjGpZsjGGtpc',
  'ggvJrNNTQgQrNvgqBqZCCjClWjGtWjCpGJFW',
  'TVdrqvVrTNTzBqQQzTRMfHbMwMbZMdMbHwRD',
  'bcfJQQJHsQPCpdpWdPbb',
  'RHjHDwZtrZmRDDtwtjRBVFdWVrrrBClldVphCF',
  'zDgwgNzjmDnMnzMMHncG',
  'vMHRvMhvHWRBRDHhRBwWvRBqLqbGwqnqnnNTbNqdNbbVVr',
  'pslgcZszJltrsZcZgNnnqbSSTSSndbNbzS',
  'cZcgsZgZZgPgmcpfJtfttWBQvmFWjDQDhBmFjDHvFr',
  'bVbBvdTTVLbCgCznLJsJcwHPczfz',
  'NFcDphSDrFjGtZNZjplZGZFnzPHPrzHHzJMnnwfPsPsRJs',
  'cGtGljFmWdvqmVCV',
  'qSNbTvcvTGTvGcgtBNvcbdrdjrnjRnjRVHdDqHrRHj',
  'ZZZZPLWPzPDCCsCRnRdwVFnjdwPVFP',
  'ChlCLLZftfcBvfDv',
  'cRtfctVgmRclmBFGbbMBDDFPtD',
  'svQZhHSHssjTvjpQjSSBBMJMJGDBpPbMzzpGzP',
  'ZsvsCTWhCHhSwwjrwbndldlRnfRNmb',
  'PQdTgdGpRcTccCfj',
  'hHFLHlHBhBlmlDFzHrhhfZNZbfNZcVWNVVZRDjCC',
  'LFLLMHJHSBhBFGGnMMvsGtGGtj',
  'fwmVnVCDVqpNQqqb',
  'ddBcZZWdvGWzBzsWvLvddlNHcHQPbQqqJQNNQHPHQT',
  'WgGvsMMzvgbntDhCmt',
  'JjwhFMmwjJwmCgTgSCSFlPLg',
  'WWbsbVtftBZWtnWtncbQvctTGLpLgCpzPPPlllpzlgPPTQ',
  'TBvnfBffWsfVtTvbZBTNjwjqddhMNqwRMMhdRMrq',
  'SllrbtTSQrSQrbrvvMvzFDsBsssWpWdWbGpGBWNWNW',
  'hhCfmmmjmPLCfmnPLfqPgqqNNBpjZBZQDNQdpWNpdBBsBp',
  'RhLfPhQLQfCRnHfqTHHrFJMrttTwTtzt',
  'BFrFBJMMJnnsNJBFCdLCnmvzbPdCmPnc',
  'LDLVHQRfDvdHdcCmcv',
  'llQDwqSVLwZLZSgsGZMNMgTjTMTr',
  'mrwdbqRhdCNGgZBHbH',
  'jVTPMjvjpvMfTfQfPlpHHZNnNBHgZDGsGMnCsZ',
  'TLlfQpffQvvzhtNqztRFtzcm',
  'DDfvJZZPDHVPSPcSvcgcWCsWQcTTdhQTTh',
  'dMwpbdjRtrFhhTsTFQWqhC',
  'bGRdNpbzlvLfDfZlLZ',
  'bdPQdcpdbpjFqpQcQwqqhhNRhJvWRfrrWBsJrfwN',
  'mMtlZfmtnLZtSnGDlmGWRRhrWLhJsBRvgRWghh',
  'DnMGCtmCzfGMbjdQbVzpqcFH',
  'jwnGggRBvvpBZCljCsCWrhhrsh',
  'FVMcFLqLMqcJfVtDqMJcHMHWCSblzzrWsdhSLlSzbrGCLz',
  'HQVFPDtDQDFFNTZpPgNnGgNn',
  'HNBHNqlqHJQBRNvdmZvmPdZZlpnT',
  'bDbbhDgSfzVVfnvPmfHmTZZd',
  'jgzbwrhVsDgsDWLwJqqBMqcqHL',
  'tzNtJzsJVBHzbjbglCHc',
  'nfmnGnmPhntCgHvtvmCj',
  'MStTwrMTWrTdBZSNLZJNVQ',
  'NVjmwmVGGwGFHstwFHMhTh',
  'psRSzzscZscZpgQQzqQtBBHTTlThHHtTTh',
  'rCprbpZccggcrRzbbRRbscvVVWWvNfvVWnGDCWVNddmd',
  'rphfGDgtPtllrPlFlGrhGjnmnTnjcBsncBBVpTTBmc',
  'SqqZMJCLwgCwJgQRqqgZQNwdBBsBBHVBdTHNsnVNBTccnc',
  'MJqZZMbqgzRCSJZwPtFfGzWhrrfGttWl',
  'cSZqqcwbqVzqCbqVqVZPsvvDCDrffngvphggndhdGh',
  'tTNTMWJNQJHMNGSSprfdGnfdth',
  'WNRHWWMJSRWzswbczsVPRs',
  'HCgcSMhSMBGMdvGf',
  'RNQqbDQqFdRFdmTZfGtPZvtGlQffll',
  'mNpdNrRDbTNrmbpzmpWmbpWcswhcHcjhscSHjSgVHwHn',
  'MwgcFgwMMcscCbMFsMFCgMgPPLWPvptvBvPvtvvWmBBzwG',
  'nhQQjTJRVDdQJrPpmnGGBmvtGvLz',
  'HdJQdJHjrJQDBQjhQVQJhdJcqlFHcSqsNbCbCqCHFqCFgC',
  'JvTnvWtdJLbhJHbMwwHjcGHCwHwQGQ',
  'mqtmsllmfqVFwMwMrrPjmQrC',
  'lfztRZSlRDRVzfdpWnSvWhNdbnpp',
  'rSvrgggzHTNzrHtnptpmlDngZjWj',
  'MdMhqMhsfMSRcGqRsQQRctjjdDnjtjClCjjpZnDlnt',
  'BBMRsQRfRcscGqBfRRsBssPBLLzNLFPwvVFFPTLbbLwHHTvS',
  'pCmCfdPFzmsFsDhFFDsttptpRtJjLnlJRtttHt',
  'ZQwgWZgqJhTTRtgV',
  'GNqWNvcqqQQrMMWcQzDDsSzBDBSssSmhhr',
];

const testInput = [
  'vJrwpWtwJgWrhcsFMMfFFhFp',
  'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
  'PmmdzqPrVvPwwTWBwg',
  'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
  'ttgJtRGJQctTZtZT',
  'CrZsJsPPZsGzwwsLwLmpwMDw',
];

const isLowerCase = (string) => {
  return string.toLowerCase() === string;
};

const getPriority = (item) => {
  return item.charCodeAt(0) - (isLowerCase(item) ? 96 : 38);
};

const rucksackReorganization = (input) => {
  return input.reduce((sumOfPriorities, rucksacks) => {
    const regex = new RegExp(`.{${rucksacks.length / 2}}`, 'g');
    const [rucksack1, rucksack2] = rucksacks.match(regex);
    for (let item of rucksack1) {
      if (rucksack2.includes(item)) {
        return sumOfPriorities + getPriority(item);
      }
    }
  }, 0);
};

console.log(rucksackReorganization(input));

const rucksackReorganizationPart2 = (input) => {
  let sumOfPriorities = 0;
  for (let i = 0; i < input.length; i += 3) {
    const [rucksack1, rucksack2, rucksack3] = [input[i], input[i + 1], input[i + 2]];
    for (let item of rucksack1) {
      if (rucksack2.includes(item) && rucksack3.includes(item)) {
        sumOfPriorities += getPriority(item);
        break;
      }
    }
  }
  return sumOfPriorities;
};

console.log(rucksackReorganizationPart2(input));
