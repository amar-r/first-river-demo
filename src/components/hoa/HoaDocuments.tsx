import { hoaDocuments } from '../../data/hoaData';

const HoaDocuments = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'bylaws':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case 'rules':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        );
      case 'financial':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
          </svg>
        );
      default:
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        );
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'bylaws':
        return 'Bylaws & Governance';
      case 'rules':
        return 'Rules & Regulations';
      case 'financial':
        return 'Financial Documents';
      case 'meeting':
        return 'Meeting Documents';
      default:
        return 'Other Documents';
    }
  };

  const groupedDocuments = hoaDocuments.reduce((acc, doc) => {
    if (!acc[doc.category]) {
      acc[doc.category] = [];
    }
    acc[doc.category].push(doc);
    return acc;
  }, {} as Record<string, typeof hoaDocuments>);

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-neighborhood-blue mb-4">
            HOA Documents
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Access important HOA documents, bylaws, rules, and financial information.
          </p>
        </div>

        <div className="space-y-8">
          {Object.entries(groupedDocuments).map(([category, documents]) => (
            <div key={category} className="bg-neighborhood-light rounded-lg p-6">
              <div className="flex items-center mb-6">
                <div className="text-neighborhood-blue mr-3">
                  {getCategoryIcon(category)}
                </div>
                <h3 className="text-xl font-serif font-bold text-neighborhood-blue">
                  {getCategoryName(category)}
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {documents.map((doc, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-neighborhood-blue mb-2">
                          {doc.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-3">
                          {doc.description}
                        </p>
                        <p className="text-xs text-gray-500">
                          Last updated: {formatDate(doc.lastUpdated)}
                        </p>
                      </div>
                      
                      {doc.fileUrl ? (
                        <a
                          href={doc.fileUrl}
                          className="ml-4 flex-shrink-0 bg-neighborhood-blue text-white p-2 rounded-lg hover:bg-green-800 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </a>
                      ) : (
                        <div className="ml-4 flex-shrink-0 text-gray-400">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-neighborhood-blue text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-serif font-bold mb-4">
            Need a Document?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Can't find what you're looking for? Contact the HOA board for assistance.
          </p>
          <div className="space-y-4">
            <p className="text-sm opacity-80">
              <strong>Email:</strong> firstriverfarmshoa@gmail.com
            </p>
            <p className="text-sm opacity-80">
              <strong>Response Time:</strong> Usually within 24-48 hours
            </p>
          </div>
        </div>

        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <div className="ml-3">
              <h4 className="text-sm font-medium text-yellow-800">
                Document Access Notice
              </h4>
              <p className="text-sm text-yellow-700 mt-1">
                Some documents may require additional verification or may be available only at board meetings. 
                Contact the board if you need immediate access to specific documents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HoaDocuments; 