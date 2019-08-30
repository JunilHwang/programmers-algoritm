from heapq import heappush as push, heappop as pop

def solution(stock, d, s, k):
    cnt = 0
    i = 0
    last = len(d)
    h = []
    for now in range(k):
        if i < last and now == d[i]:
            push(h, -s[i])
            i+=1
        if not stock:
            stock = -pop(h)
            cnt += 1
            if stock >= k - 1 : break
        stock -= 1
    return cnt