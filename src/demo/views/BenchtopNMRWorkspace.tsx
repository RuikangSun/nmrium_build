import type { CustomWorkspaces } from '@zakodium/nmrium-core';

import View from './View.js';

const customWorkspaces: CustomWorkspaces = {
  benchtop: {
    display: {
      general: {
        hideGeneralSettings: false,
        experimentalFeatures: {
          display: true,
          visible: true,
        },
        hidePanelOnLoad: false,
        hideLogs: false,
        hideHelp: false,
        hideMaximize: false,
        hideWorkspaces: false,
      },
      panels: {
        spectraPanel: {
          display: true,
          visible: true,
          open: true,
        },
        informationPanel: {
          display: true,
          visible: true,
          open: false,
        },
        integralsPanel: {
          display: false,
          visible: false,
          open: false,
        },
        rangesPanel: {
          display: true,
          visible: true,
          open: false,
        },
        structuresPanel: {
          display: true,
          visible: true,
          open: false,
        },
        processingsPanel: {
          display: true,
          visible: true,
          open: true,
        },
        zonesPanel: {
          display: true,
          visible: true,
          open: false,
        },
        automaticAssignmentPanel: {
          display: false,
          visible: false,
          open: false,
        },
        databasePanel: {
          display: false,
          visible: false,
          open: false,
        },
        multipleSpectraAnalysisPanel: {
          display: false,
          visible: false,
          open: false,
        },
        peaksPanel: {
          display: false,
          visible: false,
          open: false,
        },
        predictionPanel: {
          display: false,
          visible: false,
          open: false,
        },
        summaryPanel: {
          display: false,
          visible: false,
          open: false,
        },
        simulationPanel: {
          display: false,
          visible: false,
          open: false,
        },
      },
      toolBarButtons: {
        baselineCorrection: true,
        exclusionZones: false,
        exportAs: true,
        fft: true,
        import: true,
        integral: true,
        multipleSpectraAnalysis: false,
        phaseCorrection: true,
        rangePicking: true,
        realImaginary: true,
        slicing: true,
        spectraCenterAlignments: true,
        spectraStackAlignments: true,
        apodization: true,
        zeroFilling: true,
        zonePicking: true,
        zoomOut: true,
        zoom: true,
        peakPicking: true,
        autoRangeAndZonePicking: true,
        fftDimension1: true,
        fftDimension2: true,
      },
    },
    general: {
      dimmedSpectraOpacity: 0.1,
      verticalSplitterPosition: '560px',
      verticalSplitterCloseThreshold: 600,
      spectraRendering: 'auto',
      loggingLevel: 'info',
      popupLoggingLevel: 'error',
      invert: false,
      invertScroll: false,
    },
    nuclei: [
      {
        nucleus: '1H',
        ppmFormat: '0.00',
        hzFormat: '0.00',
      },
      {
        nucleus: '13C',
        ppmFormat: '0.00',
        hzFormat: '0.00',
      },
      {
        nucleus: '15N',
        ppmFormat: '0.00',
        hzFormat: '0.00',
      },
      {
        nucleus: '19F',
        ppmFormat: '0.00',
        hzFormat: '0.00',
      },
      {
        nucleus: '29Si',
        ppmFormat: '0.00',
        hzFormat: '0.00',
      },
      {
        nucleus: '31P',
        ppmFormat: '0.00',
        hzFormat: '0.00',
      },
    ],
    panels: {},
    databases: {
      defaultDatabase: '',
      data: [
        {
          key: 'toc',
          label: 'Toc',
          url: 'https://data.cheminfo.org/nmr/database/toc.json',
          enabled: true,
        },
      ],
    },
    nmrLoaders: {
      general: {
        keep1D: true,
        keep2D: true,
        onlyReal: false,
        dataSelection: 'preferFT',
      },
      bruker: {
        onlyFirstProcessedData: true,
      },
    },
    infoBlock: {
      visible: false,
      position: { x: 0, y: 0 },
      fields: [
        {
          label: 'Name',
          jpath: ['info', 'name'],
          visible: true,
          format: '',
        },
        {
          label: 'Number of scans',
          jpath: ['info', 'numberOfScans'],
          visible: true,
          format: '0',
        },
        {
          label: 'Pulse sequence',
          jpath: ['info', 'pulseSequence'],
          visible: true,
          format: '',
        },
        {
          label: 'Frequency',
          jpath: ['info', 'originFrequency'],
          visible: true,
          format: '0',
        },
      ],
    },
    onLoadProcessing: {
      autoProcessing: true,
      filters: {
        '1H': [
          {
            name: 'digitalFilter',

            enabled: true,
          },
          {
            name: 'apodization',

            enabled: false,
          },
          {
            name: 'zeroFilling',

            enabled: true,
          },
          {
            name: 'fft',

            enabled: true,
          },
          {
            name: 'phaseCorrection',

            enabled: true,
          },
        ],
        '13C': [
          {
            name: 'digitalFilter',

            enabled: true,
          },
          {
            name: 'apodization',

            enabled: true,
          },
          {
            name: 'zeroFilling',

            enabled: true,
          },
          {
            name: 'fft',

            enabled: true,
          },
          {
            name: 'phaseCorrection',

            enabled: true,
          },
        ],
      },
    },
    spectraColors: {
      highlightColor: '#ffd70080',
      indicatorLineColor: '#2FFF0085',
      oneDimension: [],
      twoDimensions: [
        {
          jpath: ['info', 'experiment'],
          value: 'cosy',
          positiveColor: 'darkblue',
          negativeColor: 'blue',
        },
        {
          jpath: ['info', 'experiment'],
          value: 'noesy',
          positiveColor: 'pink',
          negativeColor: 'yellow',
        },
        {
          jpath: ['info', 'experiment'],
          value: 'roesy',
          positiveColor: 'pink',
          negativeColor: 'yellow',
        },
        {
          jpath: ['info', 'experiment'],
          value: 'tocsy',
          positiveColor: 'green',
          negativeColor: 'yellow',
        },
        {
          jpath: ['info', 'experiment'],
          value: 'hsqc',
          positiveColor: 'black',
          negativeColor: 'yellow',
        },
        {
          jpath: ['info', 'experiment'],
          value: 'hmbc',
          positiveColor: 'darkviolet',
          negativeColor: 'yellow',
        },
      ],
    },
    label: 'Simple NMR analysis',
    visible: true,
  },
};

export default function BenchtopNMRWorkspace(props) {
  return (
    <View {...props} workspace="benchtop" customWorkspaces={customWorkspaces} />
  );
}
