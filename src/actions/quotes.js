export function addQuote(quote = {}) {
    return ({
        type: "ADD_QUOTE",
        quote: quote
    })
}

export function removeQuote(quoteId = null) {
    return ({
        type: "REMOVE_QUOTE",
        quoteId: quoteId
    })
}

export function upvoteQuote(quoteId = null) {
    return ({
        type: "UPVOTE_QUOTE",
        quoteId: quoteId
    })
}

export function downvoteQuote(quoteId = null) {
    return({
        type: "DOWNVOTE_QUOTE",
        quoteId: quoteId
    })
} 
