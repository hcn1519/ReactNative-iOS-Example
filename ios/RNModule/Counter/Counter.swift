//
//  Counter.swift
//  RNModule
//
//  Created by 홍창남 on 09/11/2018.
//  Copyright © 2018 홍창남. All rights reserved.
//

import Foundation
import React

@objc(Counter)
class Counter: RCTEventEmitter {

    override static func requiresMainQueueSetup() -> Bool {
        return true
    }

    private var count = 0

    @objc func increment() {
        count += 1

        // 리스닝하고 있는 JS 객체에게 데이터 전달
        sendEvent(withName: "onIncrement", body: ["count": count])
    }

    override func supportedEvents() -> [String]! {
        return ["onIncrement"]
    }

    @objc func getCount(_ callback: RCTResponseSenderBlock) {
        callback([count])
    }

    @objc func passMultipleData(_ callback: RCTResponseSenderBlock) {
        callback([
            count,               // variable
            123.9,               // int or float
            "third argument",    // string
            [1, 2.2, "3"],       // array
            ["a": 1, "b": 2]     // object
            ])
    }

    @objc func decrement(_ resolve: RCTPromiseResolveBlock,
                   rejecter reject: RCTPromiseRejectBlock ) {
        if (count == 0) {
            let error = NSError(domain: "", code: 200, userInfo: nil)
            reject("E_COUNT", "count cannot be negative", error)
        } else {
            count -= 1
            resolve("count was decremented")
        }
    }
}
