//
//  RNBridgeManager.swift
//  RNModule
//
//  Created by 홍창남 on 11/11/2018.
//  Copyright © 2018 홍창남. All rights reserved.
//

import Foundation

class RNBridgeManager: NSObject {
    static let `default` = RNBridgeManager()

    let jsLocation = URL(string: "http://localhost:8081/index.bundle?platform=ios")

    var bridge: RCTBridge?

    func setupBridge(launchOptions: [AnyHashable: Any]? = nil) {
        self.bridge = RCTBridge(delegate: self, bundleURL: self.jsLocation,
                                moduleProvider: nil, launchOptions: launchOptions)
    }
}

extension RNBridgeManager: RCTBridgeDelegate {
    func sourceURL(for bridge: RCTBridge!) -> URL! {
        return URL(string: "http://localhost:8081/index.bundle?platform=ios")
    }
}
