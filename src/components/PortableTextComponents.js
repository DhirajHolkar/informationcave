import '../styles/portable-text-components.css'


export const PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?.url) {
        console.error('Image asset missing', value);
        return null;
      }

      return (
        <div className="blogsection-image-container"  >
          <img
            src={value.asset.url}
            alt={value.alt || 'Post Image'}
            className="blogsection-image"
          />
        </div>
      );
    },

    videoBlock: ({ value }) => {
      if (!value?.videoUrl) return null; // corrected field name
      return (
        <div className="blogsection-video-container">
          <iframe
            width="100%"
            height="400"
            src={value.videoUrl}
            frameBorder="0"
            allowFullScreen
          />
          
        </div>
      );
    },

    listBlock: ({ value }) => {
      if (!value?.items?.length) return null;
      return (
        <ul className="blogsection-list-container">
          {value.items.map((item, idx) => (
            <li key={idx} className="blogsection-list">
              {item}
            </li>
          ))}
        </ul>
      );
    },
  },


  block: {
    normal: ({ children }) => <p className="blogsection-block-container">{children}</p>,
    h1: ({ children }) => <h1 className="blogsection-heading-h1">{children}</h1>,
    h2: ({ children }) => <h2 className="blogsection-heading-h2">{children}</h2>,
    h3: ({ children }) => <h3 className="blogsection-heading-h3">{children}</h3>,
    h4: ({ children }) => <h4 className="blogsection-heading-h4">{children}</h4>,
    h5: ({ children }) => <h5 className="blogsection-heading-h5">{children}</h5>,
    h6: ({ children }) => <h6 className="blogsection-heading-h6">{children}</h6>
  },


  list: {
  bullet: ({ children }) => <ul className="blogsection-ul">{children}</ul>,
  number: ({ children }) => <ol className="blogsection-ol">{children}</ol>,
},
listItem: {
  bullet: ({ children }) => <li className="blogsection-li">{children}</li>,
  number: ({ children }) => <li className="blogsection-li">{children}</li>,
},

  
};
